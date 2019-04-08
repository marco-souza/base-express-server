import { mapToKey } from 'helpers/maps'
import { Tool } from 'models/tools/schemas'


// CRUD
export default {
  create: ({ title, link, description, tags }) => {
    console.assert(typeof title === 'string')
    console.assert(typeof link === 'string')
    console.assert(typeof description === 'string')
    console.assert(tags instanceof Array)

    return Tool.create(
      { title,
        link,
        description,
        tags: tags.map(mapToKey('name')),
      },
      { include: [Tool.Tags] }
    )
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
