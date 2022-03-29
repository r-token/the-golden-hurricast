'use strict'

require('dotenv').config()

const eventWasWarmup = require('./utils').eventWasWarmup

const getRemainingItems = async (event, context) => {
  console.log('event:', JSON.stringify(event, null, 4))
  if (eventWasWarmup(event)) { return 'Lambda is warm!' }
  
  const testProductIds = {
    tshirt3xl: 'prod_LOSb5SQ5OZKjjU',
    tshirt2xl: 'prod_LOSaG7vnGTethb',
    tshirtXl: 'prod_LOSa6G2h9BbWvv',
    tshirtLarge: 'prod_LOSZCa8DDzfnQw',
    tshirtMedium: 'prod_LOSYQEvBHBz8Ql',
    tshirtSmall: 'prod_LOS9GEK71k4c68',
    
    hoodieXl: 'prod_LOSXxWav6ggxVc',
    hoodieLarge: 'prod_LOSWM41qlf8gIJ',
    hoodieMedium: 'prod_LOSAJMwijaQv1u'
  }
  
  var response = {
    statusCode: 200,
    body: {}
  }
  
  try {
    // get orders from Orders table
  } catch(err) {
    console.error('Error getting orders from Orders table:', err)
    context.captureError(err)
    response.statusCode = 500
    response.body = JSON.stringify({ error: 'error getting orders from Orders table' })
    return response
  }
  
  var cleanedOrderList = {}
  // for (const order of orders) {
  //   const productId = lineItem.price.product
  //   const quantity = lineItem.quantity
  //   
  //   console.log(JSON.stringify({productId: productId, quantity: quantity}, null, 2))
  //   
  //   switch(productId) {
  //     case testProductIds.tshirt3xl:
  //       cleanedOrderList[productId] = cleanedOrderList[productId] + quantity
  //     case testProductIds.tshirt2xl:
  //       cleanedOrderList[productId] = cleanedOrderList[productId] + quantity
  //     case testProductIds.tshirtXl:
  //       cleanedOrderList[productId] = cleanedOrderList[productId] + quantity
  //     case testProductIds.tshirtLarge:
  //       cleanedOrderList[productId] = cleanedOrderList[productId] + quantity
  //     case testProductIds.tshirtMedium:
  //       cleanedOrderList[productId] = cleanedOrderList[productId] + quantity
  //     case testProductIds.tshirtSmall:
  //       cleanedOrderList[productId] = cleanedOrderList[productId] + quantity
  //     
  //     case testProductIds.hoodieXl:
  //       cleanedOrderList[productId] = cleanedOrderList[productId] + quantity
  //     case testProductIds.hoodieLarge:
  //       cleanedOrderList[productId] = cleanedOrderList[productId] + quantity
  //     case testProductIds.hoodieMedium:
  //       cleanedOrderList[productId] = cleanedOrderList[productId] + quantity
  //   }
  // }
  
  // console.log('cleanedOrderList:', JSON.stringify(cleanedOrderList, null, 2))
  response.body = JSON.stringify(response.body, null, 2)
  
  return response
}

const addOrderToTable = async (event, context) => {
  const setupBaseVars = require('./utils').setupBaseVars
  const uploadToDynamo = require('./utils').uploadToDynamo
  const { v4: uuidv4 } = require('uuid')
  
  console.log('event:', JSON.stringify(event, null, 4))
  if (eventWasWarmup(event)) { return 'Lambda is warm!' }
  
  const { productId, quantity, ordersTable } = setupBaseVars(event)
  const orderId = uuidv4()
  
  var response = {
    statusCode: 200,
    body: {}
  }
  
  const orderObject = {
    "productId": productId,
    "orderId": orderId,
    "quantity": quantity
  }
  
  try {
    await uploadToDynamo(ordersTable, orderObject)
    console.log('New Order item uploaded to DynamoDB successfully')
  } catch(err) {
    console.error('DynamoDB Order upload failed')
    context.captureError(err)
    response.statusCode = 500
    response.body = JSON.stringify({ error: 'error uploading order to the database' })
    return response
  }
  
  response.body = JSON.stringify({ message: `Successfully uploaded order ${orderId} to the database` }, null, 2)
  
  return response
}

module.exports = {
  getRemainingItems,
  addOrderToTable
}