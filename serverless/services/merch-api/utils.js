const setupBaseVarsForAddOrder = (event) => {
  const productId = event.pathParameters.productId
	const orderId = event.pathParameters.orderId
  const quantityString = event.pathParameters.quantity
	const quantity = Number.parseInt(quantityString)
  const stage = process.env.STAGE
  const ordersTable = process.env.ORDERS_TABLE
  
  console.log('productId:', productId)
	console.log('orderId:', orderId)
  console.log('quantity:', quantity)
  console.log('stage:', stage)
  console.log('ordersTable:', ordersTable)
  
  return { productId, orderId, quantity, ordersTable }
}

module.exports = {
	setupBaseVarsForAddOrder
}