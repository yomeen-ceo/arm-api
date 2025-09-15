const express = require('express')
const router = express.Router()

const productsController = require('../controllers/productsController')
router.post('/create', productsController.create) // 產品新增
router.post('/edit', productsController.edit) // 產品修改
router.get('/list', productsController.list) // 產品查詢
router.get('/detail/:productId', productsController.detail) // 單一產品查詢
module.exports = router
