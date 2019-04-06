import * as ping from './ping'


export default class Controllers {
  constructor(app, { port, host }) {
    this._app = app
    this._host = host
    this._port = port
    this._startCallback = () => {
      console.log(`Server is listening in http://${this._host}:${this._port}`)
    }

    // load routers
    this._routers = [
      ping,
    ]
    this._loadRoutes()
    // make json to document all routers
    this._loadDocRouter()
  }

  run () {
    // start server
    this._app.listen(
      this._port,
      this._host,
      this._startCallback,
    )
  }

  _loadRoutes() {
    this._routers
      .map(router => this._app[router.METHOD](
        router.PATH,
        router.controller,
      ))
  }

  _loadDocRouter() {
    this._app.get('/', (req, res) =>
      res.json(this._routers)
    )
  }

}
