const axios = require('axios')
module.exports = async function (payload) {
  const {
    order
  } = payload
  console.log('================order')
  console.log(
    order
  )
  // 呼叫手臂作業
  try {
    await axios.post('http://192.168.1.105:3333/api/robot/start-scene',{
      sceneId: '1002'
    })
  } catch (e) {
    console.log('=====錯誤內容：')
    console.log(e)
  }
  // 存入資料庫
  const orderInstance = new this({
    creationTime: new Date().getTime(),
    isDeleted: false,
    totalResult: order.totalResult,
    paymentAmount: order.paymentAmount,
    items: order.newItems
  })
  const newOrder = await orderInstance.save()
  return newOrder
}
