const addOrderToTable = async (productId, orderId, quantity) => {
	try {
		const addOrder = await fetch(`${process.env.GATSBY_MERCH_API_ENDPOINT}/orders/new/${productId}/${orderId}/${quantity}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		console.log('addOrderJson:', JSON.stringify(addOrder, null, 2))
		return JSON.stringify(addOrder, null, 2)
	} catch(err) {
		console.error('Error adding order to table:', err)
		return JSON.stringify({ error: err }, null, 2)
	}
}

const getRemainingItems = async () => {
  try {
		const remainingItems = await fetch(`${process.env.GATSBY_MERCH_API_ENDPOINT}/products/remainingItems`)
		var remainingItemsJson = remainingItems.json()
		console.log('remainingItemsJson:', JSON.stringify(remainingItemsJson, null, 2))
		return JSON.stringify(remainingItemsJson, null, 2)
  } catch(err) {
		console.error('Error getting items:', err)
		return JSON.stringify({ error: err }, null, 2)
  }
}

module.exports = {
  addOrderToTable,
  getRemainingItems
}