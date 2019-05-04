import express from 'express'
import Tools from 'models/tools'

const ENDPOINT = '/tools'

export const router = express.Router()

// GET tools
router.route(ENDPOINT)

  .get(async (req, res) => {
    const result = await Tools.list({
      tag: req.query.tag
    })
    const jsonResult = result
      .map(tool => tool.toJSON())
      // Map tag object to item value
      .map(tool => ({
        ...tool,
        tags: tool.tags
          .map(tag => tag.name)
      }))
    res.json(jsonResult)
  })

  .post(async (req, res) => res.status(201)
    .json(await Tools.create(req.body))
  )
