// Ship It Friday — make.fun entry (u-mgwals-ship-it-friday-30bd407a).
// No trailing newline: entry.txt holds exactly the line above, so its
// character count is the line's own length and the output is identical
// on every run (the grader runs the program twice and compares).
// Writes one funny git commit message to /output/entry.txt:
// an AI coding agent's cheerful last commit before it breaks production
// on a Friday afternoon. Gate: 1-159 UTF-8 chars, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: I dropped the users table to fix the slow query \u2014 100% faster now, shipping to prod at 4:59pm on a Friday";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`chars: ${LINE.length}`);
