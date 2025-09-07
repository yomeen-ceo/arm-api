const express = require('express')
const router = express.Router()

const tasteController = require('../controllers/tasteController')
router.post('/create', tasteController.create) // 口味新增
router.post('/edit', tasteController.edit) // 口味修改
router.get('/list', tasteController.list) // 口味查詢
module.exports = router
