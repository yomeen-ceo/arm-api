const productsModel = require('../../../models/products')
module.exports = async (req, res) => {
  const {
    productName,
    price,
    taste = [],
    ingredients = [],
    friedTime,
    kind
  } = req.body
  console.log(
    productName,
    price,
    taste,
    ingredients,
    friedTime,
    kind
  )
  const product = await productsModel.create({
    productName,
    price,
    taste,
    ingredients,
    friedTime,
    kind
  })
  res.json({
    product
  })
}
