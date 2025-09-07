module.exports = async (event, client) => {
  console.log('=====event')
  console.log(event)
  const { source, replyToken, mode, message } = event
  const messageType = message.type
  const messageText = message.text
  const sourceType = source.type
  let sourceRoomId = ''
  let sourceUserId = ''
  let messageCategory = ''
  let oreginAgentId = ''
  // 確認是否是客服群組發訊息
  if (sourceType === 'room') {
    sourceRoomId = source.rooomId
    sourceUserId = source.userId
    if (messageText.includes('客服部回覆')) {
      const customerId = messageText.split("'")[1]
      const contentText = messageText.split('::')[1]
      oreginAgentId = source.userId
      replySentSuccess(sourceUserId)
      pushAnswerToCustomer(customerId, contentText)
    }
  } else if (sourceType === 'user') {
    sourceUserId = source.userId
    if (messageText.includes('吃錢')) {
      messageCategory = '客服'
      transferToService()
      replyCustomer('客服會儘快與您聯繫')
    } else if (messageText.includes('合作')) {
      messageCategory = '業務'
      transferToService()
      replyCustomer('業務部門會儘快與您聯繫')
    } else {
      messageCategory = '可忽略'
      replyCustomer('感謝您寶貴的建議')
    }
  }
  // 判斷是訊息內容

  // 把傳來的訊息寫入mongo
  const oreginLineBotModel = require('./models/oreginLineBot')
  await oreginLineBotModel.create({
    resData: event,
    messageType: messageType,
    messageText: messageText,
    sourceType: sourceType,
    sourceRoomId: sourceRoomId,
    sourceUserId: sourceUserId,
    replayToken: replyToken,
    messageCategory: messageCategory,
    oreginAgentId: oreginAgentId,
    mode: mode
  })
  // 回覆訊息
  function replyCustomer (replyContent) {
    const echo = { type: 'text', text: replyContent }
    return client.replyMessage(replyToken, echo)
  }

  function replySentSuccess (staffId, replyContent) {
    const message = `Staff: ${staffId} 回覆顧客的訊息已發送`
    const echo = { type: 'text', text: message }
    return client.replyMessage(replyToken, echo)
  }

  function transferToService () {
    const messageContent = `userId: ${sourceUserId}, replyToken: ${replyToken}, 類別：${messageCategory}, 內容為：${messageText}`
    const message = { type: 'text', text: messageContent }
    client.pushMessage('R0de1aaf379ccea04061a55936c1dcb2a', message)
      .then(() => {
        console.log('sent')
      })
      .catch((err) => {
        // error handling
        console.log(err.message)
      })
  }

  function pushAnswerToCustomer (customerId, answerContent) {
    const messageContent = `${answerContent}`
    const message = { type: 'text', text: messageContent }
    client.pushMessage(customerId, message)
      .then(() => {
        console.log('sent')
      })
      .catch((err) => {
        // error handling
        console.log(err.message)
      })
  }
}
