// @ts-check
/* =====================================================================
   The social preview image.

   A small PNG writer, so the academy has a preview image of its own and
   does not have to borrow one from anywhere else. No dependencies: the
   file is written with node:zlib and a hand-rolled PNG container.

   The picture is the academy's own identity: the near-black paper, the
   blue accent, the ring pattern from the hero, and the "UX" mark.
   ===================================================================== */
import { deflateSync } from 'node:zlib';

const W = 1200;
const H = 630;

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

/** @param {Buffer} buf */
function crc32(buf) {
  let c = 0xFFFFFFFF;
  for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}

/** @param {string} type @param {Buffer} data */
function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}

/** @param {number} w @param {number} h @param {Buffer} pixels RGBA */
function png(w, h, pixels) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // colour type: RGBA
  const stride = w * 4;
  const raw = Buffer.alloc((stride + 1) * h);
  for (let y = 0; y < h; y++) {
    raw[y * (stride + 1)] = 0; // filter: none
    pixels.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

/** A tiny drawing surface. */
function surface(w, h, bg) {
  const px = Buffer.alloc(w * h * 4);
  for (let i = 0; i < w * h; i++) {
    px[i * 4] = bg[0]; px[i * 4 + 1] = bg[1]; px[i * 4 + 2] = bg[2]; px[i * 4 + 3] = 255;
  }
  /** @param {number} x @param {number} y @param {number[]} c @param {number} [a] */
  const dot = (x, y, c, a = 1) => {
    if (x < 0 || y < 0 || x >= w || y >= h) return;
    const i = (y * w + x) * 4;
    const t = Math.max(0, Math.min(1, a));
    px[i] = Math.round(px[i] * (1 - t) + c[0] * t);
    px[i + 1] = Math.round(px[i + 1] * (1 - t) + c[1] * t);
    px[i + 2] = Math.round(px[i + 2] * (1 - t) + c[2] * t);
  };
  /** @param {number} x0 @param {number} y0 @param {number} x1 @param {number} y1 @param {number[]} c @param {number} t */
  const line = (x0, y0, x1, y1, c, t) => {
    const steps = Math.ceil(Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0)));
    for (let i = 0; i <= steps; i++) {
      const x = x0 + ((x1 - x0) * i) / steps;
      const y = y0 + ((y1 - y0) * i) / steps;
      for (let dy = -t / 2; dy <= t / 2; dy++) for (let dx = -t / 2; dx <= t / 2; dx++) dot(Math.round(x + dx), Math.round(y + dy), c);
    }
  };
  return { px, dot, line };
}

/** The preview image, as a PNG buffer. */
export function ogImage() {
  const INK = [10, 10, 10];
  const PAPER = [255, 255, 255];
  const ACCENT = [30, 64, 175];
  const s = surface(W, H, INK);

  // The ring pattern from the hero, centred off to the right.
  const cx = W * 0.78;
  const cy = H * 0.42;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const d = Math.hypot(x - cx, y - cy);
      const ring = Math.abs(((d - 40) % 64) + 64) % 64;
      if (ring < 1.4) s.dot(x, y, [255, 255, 255], 0.075);
    }
  }

  // The "UX" mark, drawn with strokes.
  const scale = 1;
  const top = 150;
  const size = 240;
  const left = 110;
  const stroke = 34 * scale;
  const uL = left;
  const uR = left + size * 0.72;
  const uBottom = top + size;
  s.line(uL, top, uL, uBottom - size * 0.28, PAPER, stroke);
  s.line(uR, top, uR, uBottom - size * 0.28, PAPER, stroke);
  s.line(uL, uBottom - size * 0.28, uR, uBottom - size * 0.28, PAPER, stroke);
  const xL = left + size * 1.12;
  const xR = xL + size * 0.72;
  s.line(xL, top, xR, uBottom, PAPER, stroke);
  s.line(xR, top, xL, uBottom, PAPER, stroke);

  // The accent rule along the bottom.
  for (let x = 0; x < W; x++) for (let y = H - 14; y < H; y++) s.dot(x, y, ACCENT);

  return png(W, H, s.px);
}
