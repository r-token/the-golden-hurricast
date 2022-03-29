import React, { useEffect, useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import ProductCard from "./ProductCard"
import { getRemainingItems } from '../../api/merch-api'

const containerStyles = {
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	justifyContent: "space-between",
	padding: "1rem 0 1rem 0",
}

const Products = () => {
	const [remainingItems, setRemainingItems] = useState([])
	
	useEffect(() => {
		let mounted = true
		getRemainingItems()
		.then(items => {
			if(mounted) {
				setRemainingItems(items)
			}
		})
		return () => mounted = false
	}, [])
	
	return (
		<StaticQuery
			query={graphql`
				query ProductPrices {
					prices: allStripePrice(
						filter: { active: { eq: true } }
						sort: { fields: [unit_amount] }
					) {
						edges {
							node {
								id
								active
								currency
								unit_amount
								product {
									id
									active
									name
									images
									metadata {
										sort_number	
									}
								}
							}
						}
					}
				}
			`}
			render={({ prices }) => {
				// Group prices by product
				const products = {}
				var sortedProducts = prices.edges.sort((a, b) => a.node.product.metadata.sort_number.localeCompare(b.node.product.metadata.sort_number))
				sortedProducts = sortedProducts.filter(function(item) {
					return item.node.product.active === true
				})
				for (const { node: price } of sortedProducts) {
					const product = price.product
					if (!products[product.id]) {
						products[product.id] = product
						products[product.id].prices = []
					}
					products[product.id].prices.push(price)
				}
				return (
					<div style={containerStyles}>
						{Object.keys(products).map(key => (
							<ProductCard key={products[key].id} product={products[key]} />
						))}
					</div>
				)
			}}
		/>
	)
}

export default Products