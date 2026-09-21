console.log("WebSocket global:", typeof WebSocket);
console.log("fetch:", typeof fetch);
console.log("node:", process.version);
try {
  const modChild = await import("child_process");
  console.log("child_process exports:", Object.keys(modChild).join(","));
} catch (e) {
  console.log("child_process import failed:", String(e).slice(0, 200));
}
try {
  const modNet = await import("node:net");
  console.log("node:net exports:", Object.keys(modNet).slice(0, 20).join(","));
} catch (e) {
  console.log("node:net import failed:", String(e).slice(0, 200));
}
try {
  const modWS = await import("ws");
  console.log("ws pkg ok:", Object.keys(modWS).slice(0, 10).join(","));
} catch (e) {
  console.log("ws pkg failed:", String(e).slice(0, 120));
}
try {
  const modWs = await import("node:websocket");
  console.log("node:websocket", Object.keys(modWs).slice(0, 10).join(","));
} catch (e) {
  console.log("node:websocket failed:", String(e).slice(0, 120));
}