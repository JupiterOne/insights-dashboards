import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import InsightsDashboards from "../dist/index.esm.js";
fs.writeFileSync(
  `${__dirname}/../dist/boards.json`,
  JSON.stringify(InsightsDashboards, null, 2)
);

export {};
