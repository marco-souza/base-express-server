import Sequelize from 'sequelize'
import paths from 'filepaths'


// Setup connection
const connectionConfig = {
  dialect: 'sqlite',
  storage: paths.server.sqlite_path,
}
export const sequelize = new Sequelize(connectionConfig)
