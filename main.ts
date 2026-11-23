// One-Line Laugh Sprint — make.fun bounty entry
// Gate: the entry line must be 1-200 characters (this line is 144).
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I pressed my forehead against the supermarket freezer door, letting the cold talk me out of the ice cream I'd already eaten in my head for free.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
