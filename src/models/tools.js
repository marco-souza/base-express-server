import Sequelize from 'sequelize'
import { sequelize } from 'helpers/db'
import { mapToKey } from 'helpers/maps'

//#region DBs setup
// DB Options
const options = {
  sequelize,
}

// Model: Tools
class Tool extends Sequelize.Model {}
Tool.init({
  title: Sequelize.STRING(50),
  link: Sequelize.STRING(120),
  description: Sequelize.STRING,
}, options)

// Model: Tags
class Tag extends Sequelize.Model {}
Tag.init({
  name: Sequelize.STRING(50),
}, options)

// Associations
Tool.Tags = Tool.hasMany(Tag, { as: 'tags' })
//#endregion


// CRUD
export default {
  create: ({ title, link, description, tags }) => {
    console.assert(typeof title === 'string')
    console.assert(typeof link === 'string')
    console.assert(typeof description === 'string')
    console.assert(tags instanceof Array)

    const newItem = {
      title,
      link,
      description,
      tags: tags.map(mapToKey('name')),
    }
    return Tool.create(newItem, {
      include: [Tool.Tags],
    })
  },

  list: (where = {}) => Tool.findAll({
    where,
    attributes: [ 'id', 'title', 'description', 'link' ],
    include:[{
      association: Tool.Tags,
      attributes: [ 'name' ]
    } ]
  }),

  update: () => {},
  delete: () => {},
}
