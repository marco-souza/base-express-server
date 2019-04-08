import path from 'path'

const relativePath = relativePath =>
  path.join(__dirname, relativePath)

export default {
    root: __dirname,
    server: {
      entry: relativePath("src/main.js"),
      sqlite_path: process.env.DB_PATH || relativePath("database.sqlite"),
    },
}