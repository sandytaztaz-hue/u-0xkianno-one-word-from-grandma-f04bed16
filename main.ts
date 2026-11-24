// One Word From Grandma — writes the single word to /output/entry.txt.
// Output dir: MAKEFUN_OUTPUT_DIR env, then --output flag, then /output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const WORD = "knowitall";

// The gate allows 1 to 30 characters of non-whitespace text; keep the
// entry exactly one word with no trailing newline so it stays 9 bytes.
if (WORD.length < 1 || WORD.length > 30 || WORD.trim().length === 0) {
  throw new Error("entry word fails the 1-30 character gate");
}

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) return resolve(fromEnv);
  const flagIndex = process.argv.indexOf("--output");
  if (flagIndex !== -1 && process.argv[flagIndex + 1]) {
    return resolve(process.argv[flagIndex + 1]);
  }
  return "/output";
}

const dir = outputDir();
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), WORD, "utf8");
