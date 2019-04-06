import resolve from 'rollup-plugin-node-resolve'
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
    format: 'umd',
  },
  plugins: [
    commonjs(),
    resolve(),
    json(),
    dev && run(),
  ]
}
