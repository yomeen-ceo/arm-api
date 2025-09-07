const express = require('express')
const router = express.Router()

const ingredientsController = require('../controllers/ingredientsController')
router.post('/create', ingredientsController.create) // 配料新增
router.post('/edit', ingredientsController.edit) // 配料修改
router.get('/list', ingredientsController.list) // 配料查詢
module.exports = router
