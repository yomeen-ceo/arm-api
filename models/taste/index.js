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
  console.log('taste MongoDB database connection established successfully')
})
const Schema = mongoose.Schema

const statics = require('./statics/index.js')

const tasteSchema = new Schema({
  isDeleted: {
    type: Boolean
  },
  creationTime: {
    type: Number
  },
  tasteName: {
    type: String
  },
  price: {
    type: Number
  }
})

tasteSchema.statics.create = statics.create
tasteSchema.statics.edit = statics.edit
module.exports = mongoose.model('Taste', tasteSchema)
