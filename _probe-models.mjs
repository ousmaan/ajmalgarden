// Probe candidate Gemini model IDs with the user's key.
// Each model gets up to 3 quick attempts (tiny prompt). Reports status counts.
const GK = "AQ.Ab8RN6Li_hh63Kfk1ZablyHSuUk-ixtyQZwhHoQyfp3Cz0X9cQ";
const MODELS = [
  "gemini-3.6-flash",
  "gemini-3.6-flash-lite",
  "gemini-3.5-flash",
  "gemini-3.5-flash-lite",
  "gemini-3.1-flash",
  "gemini-3.1-flash-lite",
  "gemini-3-flash-lite",
  "gemini-flash-latest",
  "gemini-lite-latest",
];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

for (const model of MODELS) {
  let statuses = [];
  let body = "";
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: "POST",
          headers: { "x-goog-api-key": GK, "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: "Reply: ok" }] }],
          }),
        },
      );
      statuses.push(r.status);
      if (r.status !== 200 && r.status !== 503) {
        const t = await r.text();
        body = t.slice(0, 120).replace(/\n/g, " ");
      }
      if (r.status === 200) {
        const t = await r.text();
        body = (t.match(/"text"\s*:\s*"[^"]{0,40}/) || ["ok"])[0];
        break;
      }
    } catch (e) {
      statuses.push("EXC");
    }
    await sleep(1200);
  }
  console.log(
    `${model.padEnd(24)} -> ${statuses.join(",").padEnd(12)} ${body}`,
  );
}