const axios = require('axios')
module.exports = async function (payload) {
  const {
    tasteName,
    price,
    tasteId
  } = payload
  const oldTaste = await this.findOne({ _id: tasteId })
  if (tasteName) {
    oldTaste.tasteName = tasteName
  }
  if (price === 0 || price) {
    oldTaste.price = price
  }
  const taste = await oldTaste.save()
  return taste
}
