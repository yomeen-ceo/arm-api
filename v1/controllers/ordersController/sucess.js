const ordersModel = require('../../../models/orders')
module.exports = async (req, res) => {
  const taskId = req.body.taskId
  const orders = await ordersModel.sucess({
    taskId
  })
  res.json(orders)
}
