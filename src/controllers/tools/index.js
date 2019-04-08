import express from 'express'
import Tools from 'models/Tools'

const ENDPOINT = '/tools'

export const router = express.Router()

// GET tools
router.route(ENDPOINT)
  .get(async (req, res) => {
    const result = await Tools.list()
    res.json(result)
  })
  .post(async (req, res) => {
    const result = await Tools.create(req.body)
    res.json(result)
  })
