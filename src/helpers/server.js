import Router from './router'
import bodyParser from 'body-parser'


export default class Server {
  constructor(app, { port, host }) {
    this._app = app
    this._host = host
    this._port = port
    this._startCallback = () => {
      console.log(`Server is listening in http://${this._host}:${this._port}`)
    }
    // setup middlewares
    this._app.use(bodyParser.urlencoded({
      extended: true
    }))
    this._app.use(bodyParser.json())

    // define routers
    this._router = new Router(app)
    this._router.setupRoutes()
  }

  run () {
    // start server
    this._app.listen(
      this._port,
      this._host,
      this._startCallback,
    )
  }
}
