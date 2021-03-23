'use strict'

const express = require('express')
const merchantRoutes = require('./src/modules/merchant/infrastructure/routes/routes')
const clientRoutes = require('./src/modules/client/infrastructure/routes/routes')

const app = express()
const port = process.env.PORT || 3000

app.use('/merchant', merchantRoutes)
app.use('/client', clientRoutes)

const server = app.listen(port, () => {
  console.log(`server listen on port ${port}`)
})

module.exports = server
