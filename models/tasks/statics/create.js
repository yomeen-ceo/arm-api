module.exports = async function (payload) {
  const {
    tasteName,
    price
  } = payload
  console.log('================')
  console.log(
    tasteName,
    price
  )
  const tastInstance = new this({
    creationTime: new Date().getTime(),
    isDeleted: false,
    tasteName,
    price
  })
  const taste = await tastInstance.save()
  return taste
}
