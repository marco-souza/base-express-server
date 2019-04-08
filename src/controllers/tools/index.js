import express from 'express'
import Tools from 'models/tools'
import { extractKey } from 'helpers/maps'

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
    res.status(201)
      .json({ status: 'success', id: result.id })
  })
