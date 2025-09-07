const productsModel = require('../../../models/products')
module.exports = async (req, res) => {
  const { productId } = req.params
  try {
    const product = await productsModel
      .findOne()
      .where('_id').equals(productId)
      .where('isDeleted').equals(false)
      .exec()
    res.json({
      product
    })
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}
