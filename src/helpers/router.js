import * as docs from '../controllers/docs'
import * as ping from '../controllers/ping'
import * as root from '../controllers/root'


export default class Router {
  constructor(app) {
    this._app = app
    // get all routes
    this._routes = [
      docs,
      ping,
      root,
    ]
  }

  setupRoutes() {
    this._routes
      .map(route => this._app.use(route.router))
  }
}
