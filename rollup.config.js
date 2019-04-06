import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
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
  external: [
    'path',
    'express',
    'swagger-jsdoc',
    'swagger-ui-express',
  ],
  plugins: [
    babel({
        presets: ["@babel/preset-env"],
        exclude: "node_modules/**"
    }),
    resolve({
      mainFields: [
        'jsnext',
        'main',
      ]
    }),
    commonjs(),
    json(),
    dev && run(),
  ]
}
