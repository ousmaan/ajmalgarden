# Media audit + organize (plan: photo library task).
# Run from repo root: powershell -ExecutionPolicy Bypass -File scripts/audit-media.ps1
# - Inventories ext-src/** (except organized/), hashes every file (SHA256),
#   reads image dimensions, flags unreadable files.
# - Dedupes by hash: first occurrence wins, later ones recorded as duplicates.
# - Copies uniques to ext-src/organized/AGN-XXXX.ext (copy, never move).
# - Writes ext-src/organized/media-manifest.json: technical fields filled,
#   content/tagging columns left empty for the owner's tagging pass.
# - After tagging, scripts/apply-slugs will rename to AGN-XXXX-short-slug.ext.
$ErrorActionPreference = "Stop"
$root = Join-Path (Get-Location) "ext-src"
$outDir = Join-Path $root "organized"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
Add-Type -AssemblyName System.Drawing

$files = Get-ChildItem $root -Recurse -File |
  Where-Object { $_.FullName -notlike "*$( [IO.Path]::DirectorySeparatorChar )organized$( [IO.Path]::DirectorySeparatorChar )*" } |
  Sort-Object FullName

$seen = @{}
$items = @()
$n = 0; $dups = 0; $bad = 0
foreach ($f in $files) {
  $hash = (Get-FileHash $f.FullName -Algorithm SHA256).Hash
  $ext = $f.Extension.ToLower()
  if ($ext -eq ".jpeg") { $ext = ".jpg" }
  $kind = if ($ext -match "mp4|mov|avi|mkv|webm") { "video" } else { "image" }
  $w = $null; $h = $null; $readable = $true
  if ($kind -eq "image") {
    try {
      $img = [System.Drawing.Image]::FromFile($f.FullName)
      $w = $img.Width; $h = $img.Height
      $img.Dispose()
    } catch { $readable = $false; $bad++ }
  }
  $rel = $f.FullName.Substring($root.Length + 1)
  if ($seen.ContainsKey($hash)) {
    $dups++
    $items += [ordered]@{
      id = $null; status = "duplicate"; duplicate_of = $seen[$hash]
      kind = $kind; bytes = $f.Length; width = $w; height = $h; readable = $readable
      sha256 = $hash; source_path = $rel
    }
  } else {
    $n++
    $id = "AGN-{0:D4}" -f $n
    $seen[$hash] = $id
    Copy-Item $f.FullName (Join-Path $outDir ($id + $ext))
    $items += [ordered]@{
      id = $id; file = ($id + $ext); status = if ($readable) { "unique" } else { "unreadable" }
      duplicate_of = $null; kind = $kind; bytes = $f.Length; width = $w; height = $h
      readable = $readable; sha256 = $hash; source_path = $rel
      parent_cat = ""; sub_cat = ""; collection = ""
      product_short = ""; product_long = ""; description = ""; alt = ""; name_ur = ""
      tags = @(); cover = $false; reuse = @()
    }
  }
}

$manifest = [ordered]@{
  generated = (Get-Date).ToUniversalTime().ToString("o")
  source = "ext-src (organized copies; originals untouched)"
  total_files = $files.Count
  unique = $n
  duplicates = $dups
  unreadable = $bad
  items = $items
}
$manifest | ConvertTo-Json -Depth 6 | Set-Content (Join-Path $outDir "media-manifest.json") -Encoding UTF8

Write-Output "files=$($files.Count) unique=$n duplicates=$dups unreadable=$bad"
Write-Output "manifest=ext-src/organized/media-manifest.json"
