import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import run from 'rollup-plugin-run'

import paths from './filepaths.json'

const dev = process.env.NODE_ENV !== 'production'

export default {
  input: paths.server.entry,
  output: {
    file: dev
      ? 'build/server.js'
      : undefined,
    format: 'cjs',
  },
  plugins: [
    babel({
        presets: ["@babel/preset-env"],
        exclude: "node_modules/**"
    }),
    commonjs(),
    json(),
    dev && run(),
  ]
}
