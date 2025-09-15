const productsModel = require('../../../models/products')
module.exports = async (req, res) => {
  const {
    productId,
    productName,
    price,
    taste = [],
    ingredients = [],
    friedTime,
    kind,
    scenarioId
  } = req.body
  const product = await productsModel.edit({
    productId,
    productName,
    price,
    taste,
    ingredients,
    friedTime,
    kind,
    scenarioId
  })
  res.json({
    product
  })
}
