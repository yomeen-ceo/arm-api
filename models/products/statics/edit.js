const axios = require('axios')
module.exports = async function (payload) {
  const {
    productId,
    productName,
    price,
    taste,
    ingredients,
    friedTime,
    kind,
    scenarioId
  } = payload
  console.log(
    productId,
    productName,
    price,
    taste,
    ingredients,
    friedTime,
    kind,
    scenarioId
  )
  const oldProducts = await this.findOne({ _id: productId })
  if (productName) {
    oldProducts.productName = productName
  }
  if (kind) {
    oldProducts.kind = kind
  }
  if (price === 0 || price) {
    oldProducts.price = price
  }
  if (friedTime === 0 || friedTime) {
    oldProducts.friedTime = friedTime
  }
  if (scenarioId) {
    oldProducts.scenarioId = scenarioId
  }
  if (taste) {
    oldProducts.taste = taste
  }
  if (ingredients) {
    oldProducts.ingredients = ingredients
  }
  const product = await oldProducts.save()
  return product
}
