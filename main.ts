import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY = "4,000 slices, none for me — I'm done. Keep the crumbs.";

function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

function resolveOutDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function writeEntry(): void {
  const target = join(resolveOutDir(), "entry.txt");
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, ENTRY, "utf8");
  console.log(`wrote ${target}: ${ENTRY.length} chars, ${countWords(ENTRY)} words`);
}

writeEntry();
