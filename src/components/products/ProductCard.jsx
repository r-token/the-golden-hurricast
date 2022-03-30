import React, { useState } from "react"
import getStripe from "../../utils/stripejs"
import { v4 as uuidv4 } from 'uuid'

const cardStyles = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-around",
	alignItems: "flex-start",
	padding: "10px",
	marginBottom: "1rem",
	boxShadow: "0 5px 15px -7px rgba(0,0,0,0.6)",
	backgroundColor: "#fff",
	borderRadius: "5px",
	maxWidth: "300px",
	boxSizing: "border-box",
	border: "1px lightgrey solid",
	overflow: "hidden",
	paddingBottom: "12px"
}

const buttonStyles = {
	display: "block",
	fontSize: "13px",
	textAlign: "center",
	color: "white",
	padding: "12px",
	boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
	backgroundColor: "#0275d8",
	border: "1px lightgrey solid",
	borderRadius: "5px",
	letterSpacing: "1.5px",
	marginTop: "15px"
}

const buttonDisabledStyles = {
	opacity: "0.3",
	cursor: "not-allowed",
	display: "block",
	fontSize: "13px",
	textAlign: "center",
	color: "white",
	padding: "12px",
	boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
	backgroundColor: "#0275d8",
	border: "1px lightgrey solid",
	borderRadius: "5px",
	letterSpacing: "1.5px",
	marginTop: "15px"
}

const formatPrice = (amount, currency) => {
	let price = (amount / 100).toFixed(2)
	let numberFormat = new Intl.NumberFormat(["en-US"], {
		style: "currency",
		currency: currency,
		currencyDisplay: "symbol",
	})
	return numberFormat.format(price)
}

const ProductCard = ({ product }) => {
	const [loading, setLoading] = useState(false)
	const remainingItems = product.remainingItems

	const handleSubmit = async event => {
		event.preventDefault()
		setLoading(true)

		const productId = product.id
		const orderId = uuidv4()
		const priceId = new FormData(event.target).get("priceSelect")
		const quantity = new FormData(event.target).get("quantitySelect")
		const stripe = await getStripe()
		const { error } = await stripe.redirectToCheckout({
			mode: "payment",
			lineItems: [{ price: priceId, quantity: Number.parseInt(quantity) }],
			shippingAddressCollection: {allowedCountries: ['US']},
			successUrl: `${window.location.origin}/merch-success?productId=${productId}&orderId=${orderId}&quantity=${quantity}`,
			cancelUrl: `${window.location.origin}/merch`
		})

		if (error) {
			console.warn("Error:", error)
			setLoading(false)
		}
	}

	if (remainingItems === 0) {
		return (
			<div style={cardStyles}>
				<form onSubmit={handleSubmit}>
					<fieldset style={{ border: "none" }}>
						<legend style={{ marginBottom: "15px" }}>
							<h4 style={{marginBottom: "15px"}}>{product.name}</h4>
							
							<picture style={{padding: '10px', marginLeft: '25px'}}>
								<source
									type="image/webp"
									srcSet={product.images[0]}
									style={{ height: "200px", width: "200px", border: "0px" }}
								/>
								<img
									src={product.images[0]}
									alt={product.description}
									style={{ height: "200px", width: "200px" }}
									className="floating_merch_image"
								/>
							</picture>
						</legend>
						<label style={{ width: "100%" }}>
							<b>Price</b>: {" "}
							<select className='hidden-select' style={{ width: "75%" }} name="priceSelect">
								{product.prices.map(price => (
									<option key={price.id} value={price.id}>
										{formatPrice(price.unit_amount, price.currency)}
									</option>
								))}
							</select>
						</label>
						
						<div style={{ width: "100%", paddingTop: "5px", marginBottom: "-15px" }}>
							<p style={{ color: "red", fontStyle: "italic" }}>Sold out</p>
						</div>
						
						<div style={{ width: "100%", paddingTop: "5px" }}>
							<p style={{ color: "grey", fontStyle: "italic" }}>Please <a href="mailto:thegoldenhurricast@gmail.com">email us</a> if you're interested</p>
						</div>
						
					</fieldset>
					
					<button
						disabled
						style={
							buttonDisabledStyles
						}
					>
						SEE DETAILS & CHECKOUT
					</button>
				</form>
			</div>
		)
		
	} else if (remainingItems <= 5) {
		const quantityArray = Array.from({length: remainingItems}, (_, i) => i + 1)
		return (
			<div style={cardStyles}>
				<form onSubmit={handleSubmit}>
					<fieldset style={{ border: "none" }}>
						<legend style={{ marginBottom: "15px" }}>
							<h4 style={{marginBottom: "15px"}}>{product.name}</h4>
							
							<picture style={{padding: '10px', marginLeft: '25px'}}>
								<source
									type="image/webp"
									srcSet={product.images[0]}
									style={{ height: "200px", width: "200px", border: "0px" }}
								/>
								<img
									src={product.images[0]}
									alt={product.description}
									style={{ height: "200px", width: "200px" }}
									className="floating_merch_image"
								/>
							</picture>
						</legend>
						<label style={{ width: "100%" }}>
							<b>Price</b>: {" "}
							<select className='hidden-select' style={{ width: "75%" }} name="priceSelect">
								{product.prices.map(price => (
									<option key={price.id} value={price.id}>
										{formatPrice(price.unit_amount, price.currency)}
									</option>
								))}
							</select>
						</label>
						
						<label style={{ width: "100%", marginTop: "10px" }}>
							<b>Quantity</b>: {" "}
							<select style={{ width: "50%", marginLeft: "5px" }} name="quantitySelect">
								{quantityArray.map(quantity => {
									return <option value={quantity}>{quantity}</option>
								})}
							</select>
						</label>
						
						<div style={{ width: "100%", paddingTop: "5px", marginBottom: "-15px" }}>
							<p style={{ color: "red", fontStyle: "italic" }}>Only {remainingItems} left!</p>
						</div>
					</fieldset>
					
					<button
						disabled={loading}
						style={
							loading
								? { ...buttonStyles, ...buttonDisabledStyles }
								: buttonStyles
						}
					>
						SEE DETAILS & CHECKOUT
					</button>
				</form>
			</div>
		)
		
	} else {
		return (
			<div style={cardStyles}>
				<form onSubmit={handleSubmit}>
					<fieldset style={{ border: "none" }}>
						<legend style={{ marginBottom: "15px" }}>
							<h4 style={{marginBottom: "15px"}}>{product.name}</h4>
							
							<picture style={{padding: '10px', marginLeft: '25px'}}>
								<source
									type="image/webp"
									srcSet={product.images[0]}
									style={{ height: "200px", width: "200px", border: "0px" }}
								/>
								<img
									src={product.images[0]}
									alt={product.description}
									style={{ height: "200px", width: "200px" }}
									className="floating_merch_image"
								/>
							</picture>
						</legend>
						<label style={{ width: "100%" }}>
							<b>Price</b>: {" "}
							<select className='hidden-select' style={{ width: "75%" }} name="priceSelect">
								{product.prices.map(price => (
									<option key={price.id} value={price.id}>
										{formatPrice(price.unit_amount, price.currency)}
									</option>
								))}
							</select>
						</label>
						
						<label style={{ width: "100%", marginTop: "10px" }}>
							<b>Quantity</b>: {" "}
							<select style={{ width: "50%", marginLeft: "5px" }} name="quantitySelect">
								{[1, 2, 3, 4, 5].map(quantity => {
									return <option value={quantity}>{quantity}</option>
								})}
							</select>
						</label>
						
						<div style={{ width: "100%", paddingTop: "5px", marginBottom: "-15px" }}>
							<p style={{ color: "white" }}> | </p>
						</div>
					</fieldset>
					
					<button
						disabled={loading}
						style={
							loading
								? { ...buttonStyles, ...buttonDisabledStyles }
								: buttonStyles
						}
					>
						SEE DETAILS & CHECKOUT
					</button>
				</form>
			</div>
		)	
	}
}

export default ProductCard