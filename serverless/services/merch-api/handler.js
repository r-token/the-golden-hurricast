'use strict'

require('dotenv').config()

const eventWasWarmup = require('../../shared/utils').eventWasWarmup

const calculateRemainingItems = async (event, context) => {
  const setupBaseVarsForGetRemaining = require('./utils').setupBaseVarsForGetRemaining
  const getAllItemsFromTable = require('../../shared/utils').getAllItemsFromTable
  
  console.log('event:', JSON.stringify(event, null, 2))
  if (eventWasWarmup(event)) { return 'Lambda is warm!' }
  
  const stage = process.env.STAGE
  const ordersTable = process.env.ORDERS_TABLE
  
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
      
      'prod_LgLOepRsUuhoLr',    // hoodie 2xl
      'prod_LPdRl5mBH7g7Pj',    // hoodie xl
      'prod_LPdROFctTRyBZy',    // hoodie large
      'prod_LPdRj6SAvLwtoT',    // hoodie medium
      
      'prod_LPdRoZU8UuhHF5',    // mug
      
      'prod_LdtEmY4IOlEpaK'     // stickers
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
      
      'prod_Ldt2fpuFUXfGx8',    // hoodie 2xl
      'prod_LOSXxWav6ggxVc',    // hoodie xl
      'prod_LOSWM41qlf8gIJ',    // hoodie large
      'prod_LOSAJMwijaQv1u',    // hoodie medium
      
      'prod_LPdHHLIvgksU1C',    // mug
      
      'prod_LdrsVALUNpfIz4'     // stickers
    ]
  }
  
  const totalProductsEverBought = {
    [productIds[0]]: 3,    // t-shirt 3xl
    [productIds[1]]: 6,    // t-shirt 2xl
    [productIds[2]]: 20,   // t-shirt xl
    [productIds[3]]: 28,   // t-shirt large
    [productIds[4]]: 10,   // t-shirt medium
    [productIds[5]]: 6,    // t-shirt small
    
    [productIds[6]]: 2,    // hoodie 2xl
    [productIds[7]]: 8,    // hoodie xl
    [productIds[8]]: 9,    // hoodie large
    [productIds[9]]: 9,    // hoodie medium
    
    [productIds[10]]: 18,  // mug
    
    [productIds[11]]: 98   // stickers
  }
  
  const response = {
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
      for (const productId of productIds) {
        
        const currentProductId = order.productId
        const quantity = order.quantity
    
        if (currentProductId === productId) { // we found a match
          if (cleanedOrderList[currentProductId] === undefined) { // this hasn't been counted yet, start at initial quantity bought
            cleanedOrderList[currentProductId] = quantity
          } else {
            cleanedOrderList[currentProductId] = cleanedOrderList[currentProductId] + quantity
          }
        } else { // no match, add it to the object starting at 0 or keep it where it's at
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
  const uploadToDynamo = require('../../shared/utils').uploadToDynamo
  
  console.log('event:', JSON.stringify(event, null, 2))
  if (eventWasWarmup(event)) { return 'Lambda is warm!' }
  
  const { productId, orderId, quantity, ordersTable } = setupBaseVarsForAddOrder(event)
  
  const response = {
    statusCode: 200,
    body: {}
  }
  
  const orderObject = {
    'productId': productId,
    'orderId': orderId,
    'quantity': quantity
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