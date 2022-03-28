'use strict'

require('dotenv').config()

const Stripe = require('stripe')
const stripe = Stripe(process.env.GATSBY_STRIPE_SECRET_KEY)

const getRemainingNumberOfProducts = async (event, context) => {
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
    var allCheckoutSessions = await stripe.checkout.sessions.list()
    console.log('successfully retrieved all checkout sessions:', JSON.stringify(allCheckoutSessions, null, 2))
  } catch(err) {
    console.error('error retrieving checkout sessions:', err)
    context.captureError(err)
    response.statusCode = 500
    response.body = JSON.stringify({ message: `error retrieving checkout sessions: ${err.message}` })
  }
  
  const checkoutSessions = allCheckoutSessions.data
  console.log('checkoutSessions:', JSON.stringify(checkoutSessions, null, 2))
  
  var checkoutSessionIds = []
  for (const session of checkoutSessions) {
    checkoutSessionIds.push(session.id)
  }
  
  console.log('checkoutSessionIds:', JSON.stringify(checkoutSessionIds, null, 2))
  
  var cleanedOrderList = {}
  for await (const sessionId of checkoutSessionIds) {
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId)
    const lineItemsData = lineItems.data
    
    console.log('lineItemsData:', JSON.stringify(lineItemsData, null, 2))
    
    for (const lineItem of lineItemsData) {
      const productId = lineItem.price.product
      const quantity = lineItem.quantity
      
      console.log(JSON.stringify({productId: productId, quantity: quantity}, null, 2))
      
      switch(productId) {
        case testProductIds.tshirt3xl:
          cleanedOrderList[productId] = cleanedOrderList[productId] + quantity
        case testProductIds.tshirt2xl:
          cleanedOrderList[productId] = cleanedOrderList[productId] + quantity
        case testProductIds.tshirtXl:
          cleanedOrderList[productId] = cleanedOrderList[productId] + quantity
        case testProductIds.tshirtLarge:
          cleanedOrderList[productId] = cleanedOrderList[productId] + quantity
        case testProductIds.tshirtMedium:
          cleanedOrderList[productId] = cleanedOrderList[productId] + quantity
        case testProductIds.tshirtSmall:
          cleanedOrderList[productId] = cleanedOrderList[productId] + quantity
        
        case testProductIds.hoodieXl:
          cleanedOrderList[productId] = cleanedOrderList[productId] + quantity
        case testProductIds.hoodieLarge:
          cleanedOrderList[productId] = cleanedOrderList[productId] + quantity
        case testProductIds.hoodieMedium:
          cleanedOrderList[productId] = cleanedOrderList[productId] + quantity
      }
    }
  }
  
  console.log('cleanedOrderList:', JSON.stringify(cleanedOrderList, null, 2))
  
  return {
    statusCode: 200,
    body: JSON.stringify(cleanedOrderList, null, 2)
  }
}

module.exports = {
  getRemainingNumberOfProducts
}