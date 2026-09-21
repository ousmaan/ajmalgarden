// Drives the real dev-server Identify page over CDP (Edge headless).
// Mocks Pl@ntNet to return 403 (the "disabled key" scenario) and lets the real
// Gemini fallback run, then reports what the UI actually shows.
import { spawn } from "child_process";
import fs from "node:fs";

const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const DEBUG_PORT = 9333;
const PAGE_URL = "http://localhost:5173/#/identify";
const IMG = "C:\\Users\\Usman\\OneDrive\\Desktop\\AIDev\\ajmalgarden\\gallery\\WhatsApp Image 2026-09-08 at 2.54.59 PM (3).jpeg";
const WORK = fs.mkdtempSync("_hcx-");

const imgCopy = WORK + "/photo.jpeg";
fs.copyFileSync(IMG, imgCopy);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------- launch headless Edge ----------
const prof = WORK + "/prof";
fs.mkdirSync(prof, { recursive: true });
const proc = spawn(EDGE, [
  "--headless=new",
  `--remote-debugging-port=${DEBUG_PORT}`,
  `--user-data-dir=${prof}`,
  "--disable-gpu",
  "--no-first-run",
  "--no-default-browser-check",
  PAGE_URL,
], { stdio: ["ignore", "inherit", "inherit"] });

// ---------- wait for debugger ws ----------
let wsUrl = null;
for (let i = 0; i < 80 && !wsUrl; i++) {
  await sleep(250);
  try {
    const r = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`);
    wsUrl = (await r.json()).webSocketDebuggerUrl;
  } catch {}
}
if (!wsUrl) {
  console.log("FAIL: no debugger ws after 20s");
  proc.kill(9);
  process.exit(1);
}

// ---------- cdp client ----------
let nextId = 0;
const pending = new Map();
const events = [];
const sock = new WebSocket(wsUrl);
let wsErr = null;
sock.onerror = (e) => { wsErr = e; };
sock.onmessage = (e) => {
  const msg = JSON.parse(e.data);
  if (msg.id) {
    const p = pending.get(msg.id);
    if (p) {
      pending.delete(msg.id);
      if (msg.error) p.reject(new Error(msg.error.message));
      else p.resolve(msg.result);
    }
  } else if (msg.method) {
    events.push(msg);
  }
};
await new Promise((res, rej) => { sock.onopen = res; });

function send(sessionId, method, params) {
  const id = ++nextId;
  sock.send(JSON.stringify({ id, method, params: params || {}, ...(sessionId ? { sessionId } : {}) }));
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    setTimeout(() => {
      if (pending.has(id)) { pending.delete(id); reject(new Error("timeout: " + method)); }
    }, 60000);
  });
}

const waitEvent = async (method, timeoutMs = 45000) => {
  const t0 = Date.now();
  while (Date.now() - t0 < timeoutMs) {
    const i = events.findIndex((ev) => ev.method === method && !ev.handled);
    if (i >= 0) { events[i].handled = true; return events[i].params; }
    await sleep(100);
  }
  throw new Error("no event: " + method);
};
process.on("SIGINT", () => { console.log("\ninterrupted"); });
process.on("SIGTERM", () => {});

// ---------- attach to the page ----------
const ver = await (await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).json();
const { sessionId: browserSession } = await send(null, "Target.attachToTarget", {
  targetId: ver["Browser"], flatten: true,
});

let pageTargetId = null;
for (let i = 0; i < 40 && !pageTargetId; i++) {
  const { targetInfos } = await send(browserSession, "Target.getTargets", {});
  for (const t of targetInfos) {
    if (t.url && t.url.includes("localhost:5173")) { pageTargetId = t.targetId; break; }
  }
  if (!pageTargetId) await sleep(250);
}
if (!pageTargetId) {
  console.log("FAIL: never saw the localhost:5173 tab");
  proc.kill(9);
  process.exit(1);
}
const { sessionId: pageSession } = await send(null, "Target.attachToTarget", {
  targetId: pageTargetId, flatten: true,
});

const evaluate = async (expression) =>
  (await send(pageSession, "Page.evaluate", { expression, returnByValue: true })).result;

// ---------- tamper: Pl@ntNet -> 403, real requests pass ----------
await send(pageSession, "Page.enable", {});
await send(pageSession, "Page.addScriptToEvaluateOnNewDocument", {
  source: `(() => {
    if (window.__TAMPERED__) return;
    window.__TAMPERED__ = true;
    const orig = window.fetch.bind(window);
    window.fetch = (input, init) => {
      const url = typeof input === "string" ? input : (input && input.url) || "";
      if (String(url).includes("my-api.plantnet.org")) {
        return Promise.resolve(new Response(JSON.stringify({ error: "rejected" }), {
          status: 403, headers: { "Content-Type": "application/json" },
        }));
      }
      return orig(input, init);
    };
  })();`,
});

// reload so the tamper script runs before the app code
await send(pageSession, "Page.enable", {});
await send(pageSession, "Page.reload", { ignoreCache: true });
await sleep(4000);

const tampered = await evaluate("window.__TAMPERED__ === true");

// ---------- upload a photo ----------
const { root } = await send(pageSession, "DOM.getDocument", {});
const { nodeId } = await send(pageSession, "DOM.querySelector", {
  nodeId: root.nodeId, selector: "#plant-photo",
});
await send(pageSession, "DOM.setFileInputFiles", { files: [imgCopy], nodeId });

// give the React state a beat to set the preview + enable the button
await sleep(1500);
const previewSeen = await evaluate(
  "Array.from(document.querySelectorAll('img')).some((i) => (i.getAttribute('alt') || '').startsWith('The plant photo'))",
);

// ---------- click Identify ----------
const clicked = await evaluate(
  `(() => {
    const b = Array.from(document.querySelectorAll('button'))
      .find((x) => x.textContent.includes('Identify this plant'));
    if (!b) return false;
    b.click();
    return true;
  })()`,
);
console.log("tampered:", tampered, "| preview shown:", previewSeen, "| click delivered:", clicked);

// ---------- wait for the result (or error) ----------
let outcome = "timeout";
let bodyText = "";
for (let i = 0; i < 120; i++) {
  bodyText = await evaluate("document.body.innerText");
  if (bodyText.includes("Possible matches")) { outcome = "results"; break; }
  if (bodyText.includes("We couldn't identify that photo")) { outcome = "error"; break; }
  await sleep(500);
}
console.log("outcome:", outcome);

const shot = await send(pageSession, "Page.captureScreenshot", { format: "png" });
fs.writeFileSync(WORK + "/result.png", Buffer.from(shot.data, "base64"));
fs.writeFileSync(WORK + "/result.txt", bodyText);

// ---------- report what the UI is showing ----------
const show = outcome === "results" ? "RESULTS" : "ERROR";
console.log("\n--- UI shows (" + show + ") ---");
console.log(bodyText.slice(0, 1800));

const geminiCall = events.some(
  (ev) => ev.method === "Page.loadEventFired",
);
// count network requests to Gemini through the tampered fetch is hard; instead
// check the nuggets the UI would contain:
console.log("\n--- checks ---");
console.log("has match cards:", bodyText.includes("Most likely match"));
console.log("fallback note visible:", bodyText.includes("made by a general AI"));
console.log("plantnet 403 message visible:", bodyText.includes("isn't on the service's authorized list"));
console.log("pl@ntnet quota msg visible:", bodyText.includes("free identification limit"));
console.log("'Try another photo' shown:", bodyText.includes("Try another photo"));
console.log("'Send us a photo on WhatsApp' present:", bodyText.includes("Send us a photo on WhatsApp"));
console.log("page has results screenshot:", fs.existsSync(WORK + "/result.png"));

proc.kill(9);
process.exit(0);