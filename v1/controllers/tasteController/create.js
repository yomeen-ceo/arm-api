const tasteModel = require('../../../models/taste')
module.exports = async (req, res) => {
  const tasteName = req.body.tasteName
  const price = req.body.price
  const taste = await tasteModel.create({
    tasteName,
    price
  })
  res.json(taste)
}
