/**
 * Read intrinsic pixel dimensions + byte size straight from JPEG headers.
 * No dependencies: walk the SOF0/SOF2 segment to find width/height.
 */
import { readFileSync, statSync } from "node:fs";

/** Parse JPEG SOFn marker. Returns {width,height} or null if not a JPEG. */
export function jpegSize(buf) {
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return null; // no SOI
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xff) {
      i++;
      continue;
    }
    const marker = buf[i + 1];
    // Standalone markers (no length field)
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      i += 2;
      continue;
    }
    // Start of frame markers carry the dimensions
    if (
      marker === 0xc0 || marker === 0xc1 || marker === 0xc2 || marker === 0xc3 ||
      marker === 0xc5 || marker === 0xc6 || marker === 0xc7 ||
      marker === 0xc9 || marker === 0xca || marker === 0xcb ||
      marker === 0xcd || marker === 0xce || marker === 0xcf
    ) {
      return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
    }
    const segLen = buf.readUInt16BE(i + 2);
    i += 2 + segLen;
  }
  return null;
}

/** {width,height,bytes} for one image path, safe on non-JPEG / missing files. */
export function imageMeta(path) {
  try {
    const size = jpegSize(readFileSync(path));
    const bytes = statSync(path).size;
    if (!size) return { width: null, height: null, bytes };
    return { width: size.width, height: size.height, bytes };
  } catch {
    return { width: null, height: null, bytes: 0 };
  }
}
