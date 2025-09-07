const ingredientsModel = require('../../../models/ingredients')
module.exports = async (req, res) => {
  const ingredientsName = req.body.ingredientsName
  const price = req.body.price
  const ingredients = await ingredientsModel.create({
    ingredientsName,
    price
  })
  res.json(ingredients)
}
