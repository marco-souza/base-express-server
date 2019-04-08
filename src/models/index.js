import { sequelize } from 'helpers/db'
// import seeds
import Tools from 'models/tools'
import toolsSeeds from './tools/seeds'


// Update models
export default async (force) => {
  await sequelize.sync({ force })
  seed()
}


// Seed function
export const seed = async () => {
  console.log('create seeeds')
  toolsSeeds()
}
