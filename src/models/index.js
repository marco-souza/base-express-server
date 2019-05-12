import { sequelize } from 'helpers/db'
// import seeds
import toolsSeeds from './tools/seeds'

// Update models
export default async (force) => {
  await sequelize.sync({ force })

  // Execute seeds
  toolsSeeds()
}
