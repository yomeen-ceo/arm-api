const axios = require('axios')
module.exports = async function (payload) {
  const {
    ingredientsName,
    price,
    ingredientsId,
    friedTime,
    kind
  } = payload
  const oldIngredients = await this.findOne({ _id: ingredientsId })
  if (ingredientsName) {
    oldIngredients.ingredientsName = ingredientsName
  }
  if (kind) {
    oldIngredients.kind = kind
  }
  if (price === 0 || price) {
    oldIngredients.price = price
  }
  if (friedTime === 0 || friedTime) {
    oldIngredients.friedTime = friedTime
  }
  const ingredients = await oldIngredients.save()
  return ingredients
}
