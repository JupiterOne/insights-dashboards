import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import pkg from "./package.json";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "es",
        exports: "named",
        sourcemap: true,
      },
      {
        file: pkg.browser,
        format: "umd",
        exports: "named",
        sourcemap: true,
        name: "InsightsDashboards",
      },
    ],
    plugins: [
      json(), // to parse json files
      resolve(), // so Rollup can find any dependencies
      commonjs(), // so Rollup can convert dependencies to ES modules
      typescript(),
    ],
  },
];
