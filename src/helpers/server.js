import Router from './router'


export default class Server {
  constructor(app, { port, host }) {
    this._app = app
    this._host = host
    this._port = port
    this._startCallback = () => {
      console.log(`Server is listening in http://${this._host}:${this._port}`)
    }
    // define routers
    this._router = new Router(app)
    this._router.setupRoutes()
    this._router.setupDoc()
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
