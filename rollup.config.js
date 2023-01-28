// 默认 lodash 没有被打包, 是因为它使用commonjs规范, 而rollup默认使用es module规范, 所以需要配置
const commonjs = require("@rollup/plugin-commonjs");
const nodeResolve = require("@rollup/plugin-node-resolve")
const babel = require("@rollup/plugin-babel")
const terser = require("@rollup/plugin-terser");

module.exports = {
  // 入口
  input: "./lib/index.js",
  // 出口
  output: {
    format: "umd",
    name: "myUtils",
    file: "./build/bundle.umd.js",
    globals: {
      lodash: "_",
    }
  },
  external: ["lodash"],
  plugins: [
    commonjs(),
    nodeResolve(),
    babel({ babelHelpers: "bundled",exclude: 'node_modules/**'}),
    terser()
  ]
};
