const fs = require("fs");
const { dirname } = require("path");
const { fileURLToPath } = require("url");
const __dirname2 = dirname(
  fileURLToPath(require("url").pathToFileURL(__filename).toString())
);

const { InsightsDashboards } = require("../dist/insights-dashboards.js");
fs.writeFileSync(
  `${__dirname2}/../dist/boards.json`,
  JSON.stringify(InsightsDashboards, null, 2)
);
