const eventWasWarmup = (event) => {
  if (event.source === 'serverless-plugin-warmup') {
		console.log('WarmUp - Lambda is warm!')
		return true
  } else {
		return false
  }
}

const setupBaseVarsForGetRemaining = (event) => {
	const stage = event.requestContext.apiId === 'x44hsat4d7' ? 'prod' : 'dev'
	const ordersTable = stage === 'prod' ? 'Orders' : 'Orders-dev'
	
	console.log('stage:', stage)
	console.log('ordersTable:', ordersTable)
	
	return { stage, ordersTable }
}

const setupBaseVarsForAddOrder = (event) => {
  const productId = event.pathParameters.productId
	const orderId = event.pathParameters.orderId
  const quantityString = event.pathParameters.quantity
	const quantity = Number.parseInt(quantityString)
  const stage = event.requestContext.apiId === 'x44hsat4d7' ? 'prod' : 'dev'
  const ordersTable = stage === 'prod' ? 'Orders' : 'Orders-dev'
  
  console.log('productId:', productId)
	console.log('orderId:', orderId)
  console.log('quantity:', quantity)
  console.log('stage:', stage)
  console.log('ordersTable:', ordersTable)
  
  return { productId, orderId, quantity, ordersTable }
}

const uploadToDynamo = async (tableName, itemObject) => {
	const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
	const { DynamoDBDocumentClient, PutCommand } = require('@aws-sdk/lib-dynamodb')
	
	const client = new DynamoDBClient({})
	const ddbDocClient = DynamoDBDocumentClient.from(client)
	
  const params = {
		TableName: tableName,
		Item: itemObject
  }
	
	const ddbPutCommand = new PutCommand(params)
  
  try {
		await ddbDocClient.send(ddbPutCommand)
  } catch(err) {
		throw new Error(err)
  }
}

const getAllItemsFromTable = async (table) => {
	const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
	const { DynamoDBDocumentClient, ScanCommand } = require('@aws-sdk/lib-dynamodb')
	
	const client = new DynamoDBClient({})
	const ddbDocClient = DynamoDBDocumentClient.from(client)
	
	const params = {
	 TableName: table
	}
	
	const ddbScanCommand = new ScanCommand(params)
	
	const allItems = await ddbDocClient.send(ddbScanCommand)
	return allItems.Items
}

module.exports = {
	eventWasWarmup,
	setupBaseVarsForGetRemaining,
	setupBaseVarsForAddOrder,
	uploadToDynamo,
	getAllItemsFromTable
}