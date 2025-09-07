module.exports = async function (payload) {
  
  const {
    productName,
    price,
    taste,
    ingredients,
    friedTime,
    kind
  } = payload
  const productInstance = new this({
    creationTime: new Date().getTime(),
    isDeleted: false,
    productName,
    price,
    taste,
    ingredients,
    friedTime,
    kind
  })
  const product = await productInstance.save()
  return product
}
