import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import pkg from "./package.json";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

export default [
  // browser-friendly UMD build
  {
    input: "src/index.ts",
    output: {
      name: "InsightsDashboards",
      file: pkg.browser,
      format: "umd",
      sourcemap: true,
    },
    plugins: [
      json(), // to parse json files
      resolve(), // so Rollup can find any dependencies
      commonjs(), // so Rollup can convert dependencies to ES modules
      typescript(),
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build
  {
    input: "src/index.ts",
    output: [
      { file: pkg.main, format: "cjs", sourcemap: true },
      { file: pkg.module, format: "es", sourcemap: true },
    ],
    plugins: [
      json(), // to parse json files
      typescript(),
    ],
  },
  // Definition file for TS support
  {
    input: "./dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
