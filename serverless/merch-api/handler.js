'use strict'

require('dotenv').config()

const eventWasWarmup = require('./utils').eventWasWarmup

const calculateRemainingItems = async (event, context) => {
  const setupBaseVarsForGetRemaining = require('./utils').setupBaseVarsForGetRemaining
  const getAllItemsFromTable = require('./utils').getAllItemsFromTable
  
  console.log('event:', JSON.stringify(event, null, 4))
  if (eventWasWarmup(event)) { return 'Lambda is warm!' }
  
  const { stage, ordersTable } = setupBaseVarsForGetRemaining(event)
  
  var productIds
  
  if (stage === 'prod') {
    // use the prod product IDs from Stripe
    productIds = [
      'prod_LPdRKopEfIEVR5',    // t-shirt 3xl
      'prod_LPdR9Nox0aEBIE',    // t-shirt 2xl
      'prod_LPdQGwJQfyqk4j',    // t-shirt xl
      'prod_LPdQkbU0fqZbuR',    // t-shirt large
      'prod_LPdQJsFmLSMvA6',    // t-shirt medium
      'prod_LPdOWN6j9BTVkI',    // t-shirt small
      
      'prod_LPdRl5mBH7g7Pj',    // hoodie xl
      'prod_LPdROFctTRyBZy',    // hoodie large
      'prod_LPdRj6SAvLwtoT',    // hoodie medium
      
      'prod_LPdRoZU8UuhHF5'     // mug
    ] 
  } else {
    // use the test product IDs from Stripe
    productIds = [
      'prod_LOSb5SQ5OZKjjU',    // t-shirt 3xl
      'prod_LOSaG7vnGTethb',    // t-shirt 2xl
      'prod_LOSa6G2h9BbWvv',    // t-shirt xl
      'prod_LOSZCa8DDzfnQw',    // t-shirt large
      'prod_LOSYQEvBHBz8Ql',    // t-shirt medium
      'prod_LOS9GEK71k4c68',    // t-shirt small
      
      'prod_LOSXxWav6ggxVc',    // hoodie xl
      'prod_LOSWM41qlf8gIJ',    // hoodie large
      'prod_LOSAJMwijaQv1u',    // hoodie medium
      
      'prod_LPdHHLIvgksU1C'     // mug
    ]
  }
  
  const totalProductsEverBought = {
    [productIds[0]]: 3,   // t-shirt 3xl
    [productIds[1]]: 6,   // t-shirt 2xl
    [productIds[2]]: 20,  // t-shirt xl
    [productIds[3]]: 28,  // t-shirt large
    [productIds[4]]: 10,  // t-shirt medium
    [productIds[5]]: 6,   // t-shirt small
    
    [productIds[6]]: 1,   // hoodie xl
    [productIds[7]]: 1,   // hoodie large
    [productIds[8]]: 1,   // hoodie small
    
    [productIds[9]]: 14,   // mug
  }
  
  var response = {
    statusCode: 200,
    body: {}
  }
  
  try {
    var allOrders = await getAllItemsFromTable(ordersTable)
    console.log('allOrders:', JSON.stringify(allOrders, null, 2))
  } catch(err) {
    console.error('Error getting orders from Orders table:', err)
    context.captureError(err)
    response.statusCode = 500
    response.body = JSON.stringify({ error: 'error getting orders from Orders table' })
    return response
  }
  
  var cleanedOrderList = {}
  
  if (allOrders.length > 0) {
    for (const order of allOrders) {
      console.log(`on order ${order.productId}`)
      for (const productId of productIds) {
        console.log(`testing productId ${productId}`)
        
        const currentProductId = order.productId
        const quantity = order.quantity
    
        if (currentProductId === productId) { // we found a match
          console.log(`${currentProductId} quantity in object so far: ${cleanedOrderList[currentProductId]}`)
          if (cleanedOrderList[currentProductId] === undefined) { // this hasn't been counted yet, start at 1
            cleanedOrderList[currentProductId] = 1
          } else {
            cleanedOrderList[currentProductId] = cleanedOrderList[currentProductId] + quantity
          }
        } else { // no match, add it to the object starting at 0
          if (cleanedOrderList[productId] === undefined) {
            cleanedOrderList[productId] = 0
          } else {
            cleanedOrderList[productId] = cleanedOrderList[productId]
          }
        }
      }
    } 
  } else {
    for (const productId of productIds) {
      cleanedOrderList[productId] = 0
    }
  }
  
  console.log('cleanedOrderList:', JSON.stringify(cleanedOrderList, null, 2))
  
  var remainingItems = {}
  for (const [key, value] of Object.entries(totalProductsEverBought)) {
    remainingItems[key] = totalProductsEverBought[key] - cleanedOrderList[key]
  }
  
  console.log('remainingItems:', JSON.stringify(remainingItems, null, 2))
  
  response.body = remainingItems
  
  response.body = JSON.stringify(response.body)
  return response
}

const addOrderToTable = async (event, context) => {
  const setupBaseVarsForAddOrder = require('./utils').setupBaseVarsForAddOrder
  const uploadToDynamo = require('./utils').uploadToDynamo
  
  console.log('event:', JSON.stringify(event, null, 4))
  if (eventWasWarmup(event)) { return 'Lambda is warm!' }
  
  const { productId, orderId, quantity, ordersTable } = setupBaseVarsForAddOrder(event)
  
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
  calculateRemainingItems,
  addOrderToTable
}