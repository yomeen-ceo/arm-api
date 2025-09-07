const ingredientsModel = require('../../../models/ingredients')
module.exports = async (req, res) => {
  const ingredients = await ingredientsModel.find()
    .where('isDeleted').equals(false)
    .exec()
  res.json({
    ingredients
  })
}
