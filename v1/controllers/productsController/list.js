const productsModel = require('../../../models/products')
module.exports = async (req, res) => {
  const products = await productsModel.find()
    .where('isDeleted').equals(false)
    .exec()
  res.json({
    products
  })
}
