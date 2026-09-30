/**
 * Production gate. Run this before committing anything that touches the
 * gallery, the catalog, or the Home tiles.
 *
 *   node scripts/production-check.mjs
 *
 * Exits non-zero if anything is wrong, so it can be wired into a pre-commit
 * hook or CI. Each stage is a separate script so a failure points at a cause.
 */
import { execFileSync } from "node:child_process";

const DB = `${process.env.TEMP}/db.json`;

// needsShell: npm/npx are .cmd shims on Windows and are not resolvable
// by execFileSync without a shell. Plain node scripts run shellless.
const stages = [
  // First, because a committed key is public the moment it is pushed.
  ["secret scan", "node", ["scripts/audit-secrets.mjs"], false],
  ["typecheck", "npx", ["tsc", "--noEmit"], true],
  ["fetch live data", "node", ["scripts/fetch-media-dump.mjs"], false],
  ["db integrity", "node", ["scripts/audit-db.mjs", DB], false],
  ["gallery behaviour", "node", ["scripts/test-gallery-logic.mjs", DB], false],
  ["gallery UI contract", "node", ["scripts/audit-gallery-ui.mjs"], false],
  ["home tile wiring", "node", ["scripts/verify-gallery-tiles.mjs"], false],
  ["build", "npm", ["run", "build"], true],
];

let failed = 0;
for (const [name, cmd, args, needsShell] of stages) {
  process.stdout.write(`${name.padEnd(24)}`);
  try {
    const out = execFileSync(cmd, args, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
      shell: needsShell,
    });
    const line = out
      .split("\n")
      .map((s) => s.trim())
      .filter((s) => s && !s.startsWith(">") && !s.includes("vite v"))
      .pop();
    console.log(`PASS${line ? "  — " + line.slice(0, 60) : ""}`);
  } catch (err) {
    failed++;
    console.log("FAIL");
    const msg = (err.stdout?.toString() || err.stderr?.toString() || err.message)
      .split("\n")
      .filter((l) => l.trim())
      .slice(0, 12);
    for (const l of msg) console.log("      " + l);
  }
}

console.log(failed ? `\n${failed} stage(s) failed` : "\nall stages passed");
process.exit(failed ? 1 : 0);
