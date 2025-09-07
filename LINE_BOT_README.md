# 定義config 輸入來自line bot的密錀資訊 自販機警報通知群T1
const config = {
  channelAccessToken: '',
  channelSecret: 'q0z1iOzgvf9aYU24wvt1FFsa7LDPYt84pL2YnC44L67'
}

# 定義client
const client = new line.Client(config)

# 推送消息
client.pushMessage('user_or_group_or_room_id', {
  type: 'text',
  text: 'hello, world',
})

# 回复消息
client.replyMessage(event.replyToken, {
  type: 'text',
  text: 'hello, world',
})

# 多播
client.multicast(['user_id_1', 'user_id_2', 'room_id_1'], {
  type: 'text',
  text: 'hello, world',
})

# 取得個人資訊
client.getProfile('user_id').then((profile) => {
  console.log(profile)
})

# 組摘要
client.getGroupSummary('group_id').then((summary) => {
  console.log(summary)
})

# 組成員數
client.getGroupMembersCount('group_id').then((count) => {
  console.log(count)
})

# 組成員個人資料
client.getGroupMemberProfile('group_id', 'user_id').then((profile) => {
  console.log(profile)
})

# 組成員ID（需特殊權限）
client.getGroupMemberIds('group_id').then((ids) => {
  ids.forEach((id) => console.log(id))
})

# 離開組
client.leaveGroup('group_id')

# 房間成員數
client.getRoomMembersCount('room_id').then((count) => {
  console.log(count)
})

# 房間成員資料
client.getRoomMemberProfile('room_id', 'user_id').then((profile) => {
  console.log(profile)
})

# 房間成員ID（需特殊權限）
client.getRoomMemberIds('room_id').then((ids) => {
  ids.forEach((id) => console.log(id))
})

# 離開房間
client.leaveGroup('room_id')

# “獲取豐富”菜單
client.getRichMenu('rich_menu_id').then((richMenu) => {
  console.log(richMenu.size)
  console.log(richMenu.areas[0].bounds)
})

# “創建豐富”菜單
const richMenu = {
    "size": {
      "width": 2500,
      "height": 1686
    },
    "selected": false,
    "name": "Nice richmenu",
    "chatBarText": "Tap to open",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 1686
        },
        "action": {
          "type": "postback",
          "data": "action=buy&itemid=123"
        }
      }
    ]
  }
client.createRichMenu(richMenu)
  .then((richMenuId) => console.log(richMenuId))

# 獲取豐富菜單ID
client.getRichMenuIdOfUser('user_id').then((richMenuId) => {
  console.log(richMenuId)
})

# 鏈接到用戶的豐富菜單
client.linkRichMenuToUser('user_id', 'rich_menu_id')

# 用戶的Unlink rich菜單
client.unlinkRichMenuFromUser('user_id', 'rich_menu_id')

# “下載豐富”菜單圖像
client.getRichMenuImage('rich_menu_id')
  .then((stream) => {
    stream.on('data', (chunk) => {
      ...
    })
    stream.on('error', (err) => {
      ...
    })
    stream.pipe(...)
  })

# 上傳豐富菜單圖像
client.setRichMenuImage('rich_menu_id', fs.createReadStream('./some_image.png'))

# “獲取豐富菜單”列表
client.getRichMenuList().then((richMenuArray) => {
  console.log(richMenuArray)
})

# 帳戶連結
client.getLinkToken(userId).then((linkToken) => {
  console.log(linkToken)
})

# 獲取回覆的消息數
client.getNumberOfSentReplyMessages('20191231').then((response) => {
  console.log(response)
})

# 獲取發送的消息數
client.getNumberOfSentPushMessages('20191231').then((response) => {
  console.log(response)
})

# 獲取發送的消息數
client.getNumberOfSentMulticastMessages('20191231').then((response) => {
  console.log(response)
})

# 獲取當月發送的消息數
client.getNumberOfMessagesSentThisMonth().then((response) => {
  console.log(response)
})

# 獲取各類型發送的消息數
client.getNumberOfMessageDeliveries(date).then((response) => {
  console.log(response)
})

# 獲取關注者數量
client.getNumberOfFollowers(date).then((response) => {
  console.log(response)
})

# 獲取機器人信息
client.getBotInfo().then((response) => {
  console.log(response)
})

####
