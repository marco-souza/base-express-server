import express from 'express'

const main = () => {
    // Create app
    const app = express()

    // Create health-check route
    app.get('/ping', (req, res) => {
        res.json({ message: 'pong' })
    })

    // Start to listen
    const port = process.env.PORT || '3000'
    const host = process.env.HOST || '0.0.0.0'

    app.listen(port, host, () => {
        console.log(`Start to listening in http://${host}:${port}`)
    })
}

// Run main function
main()

// TODO [1]: Create controllers
// TODO [2]: Create models
