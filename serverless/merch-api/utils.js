const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()

const eventWasWarmup = (event) => {
  if (event.source === 'serverless-plugin-warmup') {
	console.log('WarmUp - Lambda is warm!')
	return true
  } else {
	return false
  }
}

const setupBaseVars = (event) => {
  const productId = event.pathParameters.productId
  const quantity = event.pathParameters.quantity
  const stage = event.requestContext.apiId === 'TBD' ? 'prod' : 'dev'
  const ordersTable = stage === 'prod' ? 'Orders' : 'Orders-dev'
  
  console.log('productId:', productId)
  console.log('quantity:', quantity)
  console.log('stage:', stage)
  console.log('ordersTable:', ordersTable)
  
  return { productId, quantity, ordersTable }
}

const uploadToDynamo = async (tableName, itemObject) => {
  const params = {
	TableName: tableName,
	Item: itemObject
  }
  
  try {
	await dynamo.put(params).promise()
  } catch(err) {
	throw new Error(err)
  }
}

module.exports = {
	eventWasWarmup,
	setupBaseVars,
	uploadToDynamo
}