import express from 'express'

const ENDPOINT = '/ping'

export const router = express.Router()

// GET ping
router.route(ENDPOINT)
  /**
   * @swagger
   * /ping:
   *   get:
   *     tags:
   *       - User
   *     description: health check
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         message: pong
   */
  .get((req, res) => res.json({ message: 'pong' }))
