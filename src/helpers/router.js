import routes from 'controllers'


export default class Router {
  constructor(app) {
    this._app = app
    // get all routes
    this._routes = routes
  }

  setupRoutes() {
    this._routes
      .map(route => this._app.use(route.router))
  }
}
