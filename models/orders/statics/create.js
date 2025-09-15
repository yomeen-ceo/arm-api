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
    // 取得訂單產品場景ID
    // const items = order.items
    // const sceneIds = []
    // for (let i = 0, length = items.length; i < length; i = i + 1) {
    //   const sceneId = items[i].product.scenarioId
    //   sceneIds.push(sceneId)
    // }
    const res = await axios.post('http://localhost:3333/api/robot/batch-start-task',{
      scenes: [
        {
          sceneId: 12345,
          params: [],
          dir: "",
          is_parallel: false,
          loop_to: 1
        },
        {
          sceneId: 12346,
          params: ['param1', 'param2']
        },
        {
          sceneId: 12347,
          is_parallel: true,
          loop_to: 3
        }
      ]
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
