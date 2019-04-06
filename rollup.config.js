const paths = require('./filepaths.json')

module.exports = {
  input: paths.server.entry,
  output: {
    format: 'umd'
  }
}
