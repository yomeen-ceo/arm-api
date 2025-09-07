const mongoose = require('mongoose')
const config = require('../../.config.js')
mongoose.connect(config.mongodbUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
})
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'test MongoDB connection error:'))
db.once('open', function () {
  console.log('products MongoDB database connection established successfully')
})
const Schema = mongoose.Schema

const statics = require('./statics/index.js')

const productsSchema = new Schema({
  isDeleted: {
    type: Boolean
  },
  creationTime: {
    type: Number
  },
  productName: {
    type: String
  },
  price: {
    type: Number
  },
  taste: {
    type: Array
  },
  ingredients: {
    type: Array
  },
  friedTime: {
    type: Number
  },
  kind: {
    type: String
  }
})

productsSchema.statics.create = statics.create
productsSchema.statics.edit = statics.edit
module.exports = mongoose.model('Products', productsSchema)
