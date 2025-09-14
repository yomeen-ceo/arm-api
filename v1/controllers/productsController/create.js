const productsModel = require('../../../models/products')
module.exports = async (req, res) => {
  const {
    productName,
    price,
    taste = [],
    ingredients = [],
    friedTime,
    kind,
    scenarioId
  } = req.body
  console.log(
    productName,
    price,
    taste,
    ingredients,
    friedTime,
    kind,
    scenarioId
  )
  const product = await productsModel.create({
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
