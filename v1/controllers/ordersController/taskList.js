const axios = require('axios')
const ordersModel = require('../../../models/orders')
module.exports = async (req, res) => {
  const orders = await ordersModel.find()
    .where('isDeleted').equals(false)
    .where('status').equals(false)
    .exec()
  try {
    const response = await axios.get('http://192.168.18.112:3333/api/robot/task-list')
    const list = response.data.list
    const waitList = []
    for (let i = 0, length = list.length; i < length; i = i + 1) {
      waitList.push(list[i])
    }
    res.json({
      waitList,
      orders
    })
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}
