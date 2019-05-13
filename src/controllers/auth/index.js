import express from 'express'

const ENDPOINT = '/auth'

export const router = express.Router()

router.route(ENDPOINT)
  // GET access token
  .get(
    (req, res) => {
      res.json({
        token: 'asd123'
      })
    }
  )
