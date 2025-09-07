'use strict'

// [START gae_node_request_example]
const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const v1RouterProducts = require('./v1/routes/products')
const v1RouterTaste = require('./v1/routes/taste')
const v1RouterIngredients = require('./v1/routes/ingredients')
const v1RouterOrders = require('./v1/routes/orders')

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cookieParser())

app.use('/v1/products', v1RouterProducts)
app.use('/v1/taste', v1RouterTaste)
app.use('/v1/ingredients', v1RouterIngredients)
app.use('/v1/orders', v1RouterOrders)

app.use((req, res, next) => {
  res.status(404).send('Not Found')
})

// app.use((err, req, res, next) => {
//   console.error(err.stack)
//   res.status(500).send('Internal Server Error')
// })

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
  console.log('Press Ctrl+C to quit.')
})

// [END gae_node_request_example]

module.exports = app
