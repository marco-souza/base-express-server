import express from 'express'
import path from 'path'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

import filepaths from 'filepaths'


const ENDPOINT = '/docs'

export const router = express.Router()
const SUIOptions = { explorer : true }
const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
    info: {
      title: 'API Explorer', // Title (required)
      version: '1.0.0', // Version (required)
    },
  },
  // Path to the API docs
  apis: [
    filepaths.server.docs,
  ],
})


router.use(
  ENDPOINT,
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, SUIOptions)
)
