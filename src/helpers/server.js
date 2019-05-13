import express from 'express'
import passport from 'passport'
import bodyParser from 'body-parser'
import { Strategy as BearerStrategy } from 'passport-http-bearer'

import setupDatabase from 'models'
import Router from 'helpers/router'

export default class Server {
  constructor () {
    // Create app
    this._app = express()

    // Start server
    this._port = process.env.PORT || 3000
    this._host = process.env.HOST || '0.0.0.0'

    this._configure()
  }

  _configure = () => {
    // setup middleware
    this._app.use(bodyParser.urlencoded({
      extended: true
    }))
    this._app.use(bodyParser.json())
    this._app.use(passport.initialize())
    // this._app.use(passport.session())

    // define routers
    this._router = new Router(this._app)
    this._router.setupRoutes()

    // Setup models
    setupDatabase()

    // Setup auth strategy
    passport.use(new BearerStrategy(this._tokenAuth))
  }

  _startCallback = () => {
    console.log(`Server is listening in http://${this._host}:${this._port}`)
  }

  _tokenAuth = (token, done) => {
    const isValid = (token === 'asd123')

    return isValid
      ? done(null, true)
      : done(new Error())
  }

  run = () => {
    // start server
    this._app.listen(
      this._port,
      this._host,
      this._startCallback
    )
  }
}
