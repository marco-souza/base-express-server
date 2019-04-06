import express from 'express'
import Server from './helpers/server'

const main = () => {
    // Create app
    const app = express()
    const options = {
      port: process.env.PORT || '3000',
      host: process.env.HOST || '0.0.0.0',
    }
    const server = new Server(app, options)

    // Start server
    server.run()
}

// Run main function
main()
