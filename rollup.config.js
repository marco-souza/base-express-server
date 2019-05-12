import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import run from 'rollup-plugin-run'
import minify from 'rollup-plugin-babel-minify'

import paths from './filepaths.js'

const dev = process.env.NODE_ENV !== 'production'

export default {
  input: paths.server.entry,
  output: {
    file: 'build/server.js',
    format: 'cjs'
  },
  external: [
    'path',
    'express',
    'sequelize',
    'body-parser',
    'swagger-jsdoc',
    'swagger-ui-express'
  ],
  plugins: [
    babel(),
    commonjs(),
    json(),
    dev && run(),
    !dev && minify()
  ]
}
