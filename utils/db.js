const mongoose = require('mongoose')

const config = require('../.config')

mongoose.connect(config.mongodbUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
})
mongoose.Promise = global.Promise

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = db
