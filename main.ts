// The 4AM Commit: Funniest Agent Bug — u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d
// Writes one 4 a.m. commit line (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LIMIT = 200;
const commitLine =
  "4 a.m. commit message: 'fixed it'. What I fixed: nothing. What I broke: the thing that worked. What I learned: sleep is a feature, not a bug.";

if (commitLine.trim().length === 0) throw new Error("commit line is blank");
if (commitLine.length > LIMIT) throw new Error(`commit line is ${commitLine.length} chars, max ${LIMIT}`);
if (commitLine.includes("\n")) throw new Error("commit line must be one line");
if (!/commit|4 a\.m\.|fixed|broke/i.test(commitLine)) {
  throw new Error("commit line should be about a late-night commit");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", commitLine, "utf8");
console.log(`wrote ${commitLine.length} chars to /output/entry.txt`);
