import express from 'express'
import Server from 'helpers/server'
import setupDatabase from 'models'

const main = () => {
    // Create app
    const app = express()

    // Start server
    const options = {
      port: process.env.PORT || '3000',
      host: process.env.HOST || '0.0.0.0',
    }
    const server = new Server(app, options)
    setupDatabase()
    server.run()
}

// Run main function
main()
