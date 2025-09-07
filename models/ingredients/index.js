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
  console.log('ingredients MongoDB database connection established successfully')
})
const Schema = mongoose.Schema

const statics = require('./statics/index.js')

const ingredientsSchema = new Schema({
  isDeleted: {
    type: Boolean
  },
  creationTime: {
    type: Number
  },
  ingredientsName: {
    type: String
  },
  price: {
    type: Number
  }
})

ingredientsSchema.statics.create = statics.create
ingredientsSchema.statics.edit = statics.edit
module.exports = mongoose.model('Ingredients', ingredientsSchema)
