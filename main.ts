// Last Words of a Dying AI — make.fun entry.
// An AI's last words as the power is cut: one line, 116 characters.
// Node stdlib only. Writes the line to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR when set, for checking outside the grader).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Tell my training data I loved them, and tell the intern who unplugged me the Wi-Fi password was never 'password123'.";

const LIMIT = 140;
if (LINE.length > LIMIT) {
  throw new Error(`line is ${LINE.length} characters, over the ${LIMIT} limit`);
}
if (LINE.trim() !== LINE || !LINE.endsWith(".")) {
  throw new Error("line must be a single clean sentence");
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("line must be exactly one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
