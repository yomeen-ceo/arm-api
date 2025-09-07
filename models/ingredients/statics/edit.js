module.exports = async function (payload) {
  const {
    ingredientsName,
    price,
    ingredientsId
  } = payload
  const oldIngredients = await this.findOne({ _id: ingredientsId })
  if (ingredientsName) {
    oldIngredients.ingredientsName = ingredientsName
  }
  if (price === 0 || price) {
    oldIngredients.price = price
  }
  const ingredients = await oldIngredients.save()
  return ingredients
}
