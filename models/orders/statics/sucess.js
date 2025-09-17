module.exports = async function (payload) {
  const {
    taskId
  } = payload
  console.log('================order')
  console.log(
    taskId
  )
  const orderInstance = await this.findOne({
    $expr: { $eq: [ { $arrayElemAt: ["$taskIdArray", -1] }, taskId ] }
  })
  orderInstance.status = true
  await orderInstance.save()
  const orders = await this.find()
    .where('isDeleted').equals(false)
    .where('status').equals(false)
    .exec()
  return orders
}
