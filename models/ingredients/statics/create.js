module.exports = async function (payload) {
  const {
    ingredientsName,
    price
  } = payload
  console.log('================')
  console.log(
    ingredientsName,
    price
  )
  const ingredientsInstance = new this({
    creationTime: new Date().getTime(),
    isDeleted: false,
    ingredientsName,
    price
  })
  const ingredients = await ingredientsInstance.save()
  return ingredients
}
