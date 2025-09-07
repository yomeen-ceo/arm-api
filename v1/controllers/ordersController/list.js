const ordersModel = require('../../../models/orders')
module.exports = async (req, res) => {
  const orders = await ordersModel.find()
    .where('isDeleted').equals(false)
    .exec()
  res.json({
    orders
  })
}
