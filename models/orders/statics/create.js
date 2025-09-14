const axios = require('axios')
module.exports = async function (payload) {
  const {
    order
  } = payload
  console.log('================order')
  console.log(
    order
  )
  const taskIdArray = []
  // 呼叫手臂作業
  try {
    const res = await axios.post('http://localhost:3333/api/robot/start-scene',{
      sceneId: '10016'
    })
    console.log('===========res.data')
    console.log(res.data)
    const taskId = res.data.taskId
    taskIdArray.push(taskId)
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
    items: order.newItems,
    taskIdArray,
    status: false
  })
  const newOrder = await orderInstance.save()
  return newOrder
}
