const ingredientsModel = require('../../../models/ingredients')

module.exports = async (req, res) => {
  const ingredientsName = req.body.ingredientsName
  const price = req.body.price
  const ingredientsId = req.body.ingredientsId
  const ingredients = await ingredientsModel.edit({
    ingredientsName,
    price,
    ingredientsId
  })
  res.json(ingredients)
}
