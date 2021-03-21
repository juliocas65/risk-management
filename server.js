'use strict'

const express = require('express')
const merchantRoutes = require('./src/modules/merchant/infrastructure/routes/routes')

const app = express()
const port = process.env.PORT || 3000

app.use('/merchant', merchantRoutes)

const server = app.listen(port, () => {
  console.log(`server listen on port ${port}`)
})

module.exports = server
