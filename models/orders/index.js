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

const ordersSchema = new Schema({
  isDeleted: {
    type: Boolean
  },
  creationTime: {
    type: Number
  },
  totalResult: {
    type: Number
  },
  paymentAmount: {
    type: Number
  },
  items: {
    type: Array
  },
  taskIdArray: {
    type: Array
  },
  status: {
    type: Boolean
  }
})

ordersSchema.statics.create = statics.create
ordersSchema.statics.edit = statics.edit
ordersSchema.statics.sucess = statics.sucess
module.exports = mongoose.model('Orders', ordersSchema)
