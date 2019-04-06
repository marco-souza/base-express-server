import * as ping from '../controllers/ping'


export default class Router {
  constructor(app) {
    this._app = app
    // get all routes
    this._routers = [
      ping,
    ]
  }

  setupRoutes() {
    this._routers
      .map(this._mapRouteToServer())
  }

  setupDoc() {
    this._app.get('/', (req, res) =>
      res.json(this._routers)
    )
  }

  _mapRouteToServer () {
    return router => this._app[router.METHOD](
      router.PATH,
      router.controller,
    )
  }
}
