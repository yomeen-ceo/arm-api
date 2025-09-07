const ordersModel = require('../../../models/orders')
module.exports = async (req, res) => {
  const order = req.body.order
  const newOrder = await ordersModel.create({
    order
  })
  res.json(newOrder)
}
