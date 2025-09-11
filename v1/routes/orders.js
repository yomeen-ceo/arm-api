const express = require('express')
const router = express.Router()

const ordersController = require('../controllers/ordersController')
router.post('/create', ordersController.create) // 訂單新增
router.post('/edit', ordersController.edit) // 訂單修改
router.get('/list', ordersController.list) // 訂單查詢
router.get('/taskList', ordersController.taskList) // 訂單及待執行查詢
router.post('/sucess', ordersController.sucess) // 訂單完成
module.exports = router
