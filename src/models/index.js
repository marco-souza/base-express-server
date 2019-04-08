import { sequelize } from 'helpers/db'
// import seeds
import toolsSeeds from './tools/seeds'


// Update models
export default () => {
  sequelize.sync()
}


// Seed function
export const seed = () => {
  toolsSeeds()
}
