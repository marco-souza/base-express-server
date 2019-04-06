import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import run from 'rollup-plugin-run'
import paths from './filepaths.json'

const dev = process.env.NODE_ENV !== 'production'

export default {
  input: paths.server.entry,
  output: {
    file: 'build/server.js',
    format: 'cjs',
  },
  external: [
    'path',
    'express',
    'swagger-jsdoc',
    'swagger-ui-express',
  ],
  plugins: [
    resolve(),
    commonjs(),
    json(),
    dev && run(),
  ]
}
