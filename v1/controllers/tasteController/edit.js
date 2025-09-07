const tasteModel = require('../../../models/taste')

module.exports = async (req, res) => {
  const tasteName = req.body.tasteName
  const price = req.body.price
  const tasteId = req.body.tasteId
  const taste = await tasteModel.edit({
    tasteName,
    price,
    tasteId
  })
  res.json(taste)
}
