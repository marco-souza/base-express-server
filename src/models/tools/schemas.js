import Sequelize from 'sequelize'
import { sequelize } from 'helpers/db'

// DB Options
const options = {
  sequelize
}

// Model: Tools
export class Tool extends Sequelize.Model {}
Tool.init({
  title: Sequelize.STRING(50),
  link: Sequelize.STRING(120),
  description: Sequelize.STRING
}, options)

// Model: Tags
class Tag extends Sequelize.Model {}
Tag.init({
  name: Sequelize.STRING(50)
}, options)

// Associations
Tool.Tags = Tool.hasMany(Tag, { as: 'tags' })
