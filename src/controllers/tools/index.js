import express from 'express'
import Tools from 'models/tools'

const ENDPOINT = '/tools'

export const router = express.Router()

// GET tools
router.route(ENDPOINT)

  .get(async (req, res) => {
    const result = await Tools.list()
    const jsonResult = result
      .map(tool => tool.toJSON())
      // Map tag obbject to item
      .map(tool => ({
        ...tool,
        tags: tool.tags
          .map(tag => tag.name)
      }))
    console.log(jsonResult)
    res.json(jsonResult)
  })

  .post(async (req, res) => {
    const result = await Tools.create(req.body)
    res.status(201)
      .json({ status: 'success', id: result.id })
  })
