const tasteModel = require('../../../models/taste')
module.exports = async (req, res) => {
  const taste = await tasteModel.find()
    .where('isDeleted').equals(false)
    .exec()
  res.json({
    taste
  })
}
