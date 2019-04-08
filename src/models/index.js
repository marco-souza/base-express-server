import { sequelize } from 'helpers/db'
// import to set models
import Tools from './tools'

// Update models
export default () => {
  sequelize.sync()
}
