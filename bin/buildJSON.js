import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
import boards from "../dist/insights-dashboards.mjs";

fs.writeFileSync(
  `${__dirname}/../dist/boards.json`,
  JSON.stringify(boards, null, 2)
);

export {};
