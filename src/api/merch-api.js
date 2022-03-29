const addOrderToTable = async (productId, orderId, quantity) => {
	try {
		const addOrder = await fetch(`${process.env.GATSBY_MERCH_API_ENDPOINT}/orders/new/${productId}/${orderId}/${quantity}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		return addOrder
	} catch(err) {
		console.error('Error adding order to table:', err)
		return JSON.stringify({ error: err }, null, 2)
	}
}

const calculateRemainingItems = async () => {
  try {
		const response = await fetch(`${process.env.GATSBY_MERCH_API_ENDPOINT}/products/calculateRemainingItems`)
		const remainingItems = await response.json()
		return remainingItems
  } catch(err) {
		console.error('Error getting items:', err)
		return JSON.stringify({ error: err }, null, 2)
  }
}

module.exports = {
  addOrderToTable,
  calculateRemainingItems
}