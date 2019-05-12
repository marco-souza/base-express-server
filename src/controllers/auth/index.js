import express from 'express'
import passport from 'passport'

const ENDPOINT = '/auth'

export const router = express.Router()

router.route(ENDPOINT)
  // GET access token
  .get(
    passport.authenticate('bearer', { session: false }),
    (req, res) => {
      console.log('olokinho')
      res.send('token')
    }
  )
