import express from 'express'

const ENDPOINT = '/'

export const router = express.Router()

// GET ping
router.route(ENDPOINT)
  /**
   * @swagger
   * /:
   *   get:
   *     tags:
   *       - API
   *     description: Welcome
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         message: pong
   */
  .get((req, res) => res.send(`
Welcome, the server is running.

Check the documentation at /docs.
  `))
