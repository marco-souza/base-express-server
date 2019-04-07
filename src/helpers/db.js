import Sequelize from 'sequelize'
import paths from 'filepaths'


// Setup connection
const connectionConfig = {
  dialect: 'sqlite',
  storage: paths.server.db_path,
}
export const connection = new Sequelize(connectionConfig)

// Test connection
export const testConnection = () => connection.authenticate()
  .then(() => console.log('Is connected to database.'))
  .catch(err => console.error('Fail to connect on database.', err))
