import * as root from '../controllers/root'
import * as docs from '../controllers/docs'
import * as ping from '../controllers/ping'
import * as tools from '../controllers/tools'


export default class Router {
  constructor(app) {
    this._app = app
    // get all routes
    this._routes = [
      root,
      docs,
      ping,
      tools,
    ]
  }

  setupRoutes() {
    this._routes
      .map(route => this._app.use(route.router))
  }
}
