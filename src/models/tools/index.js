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

  list: async ({ tag } = {}) => {
    // [WORKARROUND] Sequelize problem
    // Sequelize has problem to filter results by its assosiations.
    // Refs: https://github.com/sequelize/sequelize/issues/8754
    //
    // To solve that, I make a query to gel all ToolIDs and then
    // I get all assosiations
    // if we received a tag.
    const onlyID = ['id']
    const attributes = ['id', 'title', 'description', 'link']
    const includeTags = {
      association: Tool.Tags,
      attributes: ['name'],
    }

    const results = Tool.findAll({
      attributes: tag
        ? onlyID
        : attributes,
      include: [{
        ...includeTags,
        where: tag
          ? { name: tag }
          : undefined,
      }]
    })

    // Return results
    return !tag
      ? results
      : Tool.findAll({
        where: { id: (await results)
          .map(item => item.toJSON())
          .map(item => item.id)
        },
        include: [includeTags],
        attributes,
      })
  },

  update: () => {},
  delete: () => {},
}
