import express from 'express'
import Tools from 'models/tools'
import passport from 'passport'
const ENDPOINT = '/tools'

export const router = express.Router()

const auth = passport.authenticate('bearer', { session: false })
const parseToolTags = tool => ({
  ...tool,
  tags: tool.tags.map(tag => tag.name)
})

router.route(ENDPOINT)
  // GET tools
  .get(auth, async (req, res) => {
    const result = await Tools.list({
      tag: req.query.tag
    })
    const jsonResult = result
      .map(tool => tool.toJSON())
      // Map tag object to item value
      .map(parseToolTags)
    res.json(jsonResult)
  })

  // POST tools
  .post(auth, async (req, res) => res.status(201)
    .json(await Tools.create(req.body))
  )

router.route(`${ENDPOINT}/:id`)
  // DELETE tool
  .delete(auth, async (req, res) => {
    try {
      res.json(await Tools.delete(req.params.id))
    } catch (error) {
      res.status(404).json({
        error: 'Tool ID not found'
      })
    }
  })

  // GET tool
  .get(auth, async (req, res) => {
    const result = await Tools.listBy('id', req.params.id)

    res.status(result ? 200 : 404).json(
      parseToolTags(result.toJSON()) ||
      { error: 'Tool ID not found' }
    )
  })
