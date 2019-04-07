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
   *     description: Health check
   *     responses:
   *       200:
   *         description: "Just respond pong `{ message: pong }`"
   *         message: pong
   */
  .get((req, res) => res.json({ message: 'pong' }))
