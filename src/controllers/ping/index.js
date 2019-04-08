import express from 'express'

const ENDPOINT = '/ping'

export const router = express.Router()

// GET ping
router.route(ENDPOINT)
  .get((req, res) => res.json({ message: 'pong' }))
