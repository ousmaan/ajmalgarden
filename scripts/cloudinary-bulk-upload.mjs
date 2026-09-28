/**
 * Bulk upload: ext-src/organized → Cloudinary (unsigned preset — no secrets).
 *
 *   CLOUDINARY_CLOUD_NAME=xxx CLOUDINARY_UPLOAD_PRESET=ajmal-unsigned node scripts/cloudinary-bulk-upload.mjs
 *
 * Owner setup (once, Cloudinary Dashboard → Settings → Upload → Upload presets):
 *   Add preset, Signing Mode = Unsigned, Folder = ajmal-garden, name it e.g. `ajmal-unsigned`.
 * Only the cloud name + preset name are needed here — both are public-safe.
 * Uploads manifest rows with status `unique` only (trashed/videos skipped).
 * public_id = `ajmal-garden/<AGN-ID>` (stable across the later slug rename —
 *   renaming adds the slug via Cloudinary rename or re-upload, never by re-ID).
 * Writes scripts/cloudinary-report.json { AGN-XXXX: { public_id, url } } for the
 * manifest→DB sync step. Free-tier safe: ~180 transformations total, one-time.
 */
import { readFileSync, writeFileSync } from "node:fs";

const cloud = process.env.CLOUDINARY_CLOUD_NAME ?? "";
const preset = process.env.CLOUDINARY_UPLOAD_PRESET ?? "";
if (!cloud || !preset) {
  console.error("Set CLOUDINARY_CLOUD_NAME and CLOUDINARY_UPLOAD_PRESET first.");
  process.exit(1);
}

const manifest = JSON.parse(readFileSync("ext-src/organized/media-manifest.json", "utf8"));
const rows = manifest.items.filter((r) => r.status === "unique" && r.kind === "image");
console.log(`uploading ${rows.length} images (skipping trashed/videos)…`);

// Unsigned presets can't enable Overwrite (Cloudinary forbids it), so reruns
// stay idempotent client-side: skip anything already deliverable, unless
// --force is passed (which WILL create suffixed duplicates — avoid).
const force = process.argv.includes("--force");
async function alreadyLive(id) {
  try {
    const res = await fetch(`https://res.cloudinary.com/${cloud}/image/upload/ajmal-garden/${id}`, {
      method: "HEAD",
    });
    return res.ok;
  } catch {
    return false;
  }
}

const report = {};
let ok = 0, failed = 0;
for (const row of rows) {
  const path = `ext-src/organized/${row.file}`;
  try {
    if (!force && (await alreadyLive(row.id))) {
      report[row.id] = {
        public_id: `ajmal-garden/${row.id}`,
        url: `https://res.cloudinary.com/${cloud}/image/upload/ajmal-garden/${row.id}`,
        skipped: "already-live",
      };
      ok++;
      continue;
    }
    const buf = readFileSync(path);
    if (buf.length > 9 * 1024 * 1024) {
      console.log(`SKIP (too large) ${row.id}`);
      continue;
    }
    const form = new FormData();
    form.append("file", new Blob([buf], { type: "image/jpeg" }), row.file);
    form.append("upload_preset", preset);
    form.append("public_id", `ajmal-garden/${row.id}`);
    form.append("tags", [...new Set(["ajmal-garden", "untagged", ...(row.tags ?? [])])].join(","));
    if (row.description) form.append("context", `caption=${row.description}`);
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/image/upload`, {
      method: "POST",
      body: form,
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data?.error?.message ?? `HTTP ${res.status}`);
    report[row.id] = { public_id: data.public_id, url: data.secure_url };
    ok++;
    if (ok % 20 === 0) console.log(`…${ok}/${rows.length}`);
    await new Promise((r) => setTimeout(r, 300));
  } catch (err) {
    failed++;
    console.log(`FAIL ${row.id}: ${err instanceof Error ? err.message : err}`);
  }
}
writeFileSync("scripts/cloudinary-report.json", JSON.stringify(report, null, 2));
console.log(`done: ok=${ok} failed=${failed} report=scripts/cloudinary-report.json`);
if (failed > 0) process.exitCode = 1;
