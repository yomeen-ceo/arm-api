# API Server

API Server

## Install the dependencies

使用的 node 版本為 12

```bash
npm install
```

### 登入 firebase
```bash
firebase login
```

### Start the app in development mode (hot-code reloading, etc.)

```bash
npm start
```

### 英特拉支付

```bash
scan2PayController/utils/.config.js
scan2PayController/utils/createOrder.js
```

### GCP版本查詢及刪除
```bash
gcloud app versions list
gcloud app versions delete 20210704t020745 20210704t144855 20210706t035529
```

### 佈署
```bash
windows + R 開啟 DOS 視窗
cd \GAE_iCoin\GAE-api  進入GAE-api路徑
gcloud app deploy -q
```

### 在自販機上開機自動npm run dev
```bash
pm2 start ~/digi_node/app.js
pm2 save
```

### 資料的驗證

採用 ajv 套件

- [ajv 文件](https://www.npmjs.com/package/ajv)

API 中，若要先驗證資料格式，請從 /functions/api/utils 中，引入 validation

需要傳入 2 個參數 :
- schema   要驗證的格式
- data     要驗證的資料

```javascript
const { validation } = require('../../../statics')

module.exports = (req, res) => {
  try {
    await checkData(req)
  } catch {
    res.status(400).json({
      message: 'invalid format'
    })
    return
  }

  // <其它程式碼......>
}

function checkData (req) {
  return new Promise((resolve, reject) => {
    const { uid } = req.params
    const schema = {
      type: 'object',
      required: [uid],
      properties: {
        uid: {
          type: 'string'
        }
      }
    }
    const { valid } = validation({
      schema,
      data: {
        uid
      }
    })
    if (valid) {
      resolve()
      return
    }
    if (!valid) {
      reject()
      return
    }
  })
}
```

### 可以直接載入 lodash 來使用
See [Lodash Documentation](https://lodash.com/docs/4.17.15).

```javascript
const _ = require('lodash')
```

### ESLint 採用 Standard
- [JavaScript Standard Style](https://standardjs.com/readme-zhtw.html#%E5%AE%89%E8%A3%9D)
- [eslint-config-standard](https://github.com/standard/eslint-config-standard)
- [ESLint](https://eslint.org/docs/user-guide/getting-started)

### mongoose 邏輯判斷
```bash
model.find({ user: { $gt: 0 } }) 其中的$gt:0表示大於0 $gte是大於等於 $lt是小於 $lte是小於等於
```
### API PAY
#### MODEL
##### payways
