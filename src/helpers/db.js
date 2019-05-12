import Sequelize from 'sequelize'
import paths from 'filepaths'

export const sequelize = new Sequelize(`sqlite://${paths.server.sqlite_path}`)
