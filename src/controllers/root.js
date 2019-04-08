import express from 'express'

const ENDPOINT = '/'

export const router = express.Router()

// GET ping
router.route(ENDPOINT)
  .get((req, res) => res.send(`
Welcome, the server is running.

Check the documentation at /docs.
  `))
