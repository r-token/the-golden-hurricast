import React, { useState } from "react"
import NavigationBar from "../components/NavigationBar";
import Seo from '../components/seo'
import getStripe from "../utils/stripejs"

const buttonStyles = {
	fontSize: "13px",
	textAlign: "center",
	color: "#000",
	padding: "12px 60px",
	boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
	backgroundColor: "rgb(255, 178, 56)",
	borderRadius: "6px",
	letterSpacing: "1.5px",
}

const buttonDisabledStyles = {
	opacity: "0.5",
	cursor: "not-allowed",
}

const stage = 'dev'

const successUrl = stage === 'prod' ? 'https://thegoldenhurricast.com/merch/success' : 'http://localhost:8000/merch/success'
const cancelUrl = stage === 'prod' ? 'https://thegoldenhurricast.com/merch/failure' : 'http://localhost:8000/merch/failure'

const Checkout = () => {
	const [loading, setLoading] = useState(false)

	const redirectToCheckout = async event => {
		event.preventDefault()
		setLoading(true)

		const stripe = await getStripe()
		const { error } = await stripe.redirectToCheckout({
			mode: "payment",
			lineItems: [{ price: "price_1GriHeAKu92npuros981EDUL", quantity: 1 }],
			successUrl: successUrl,
			cancelUrl: cancelUrl
		})

		if (error) {
			console.warn("Error:", error)
			setLoading(false)
		}
	}

	return (
		<button
			disabled={loading}
			style={
				loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
			}
			onClick={redirectToCheckout}
		>
			BUY OUR MERCH
		</button>
	)
}

export default Checkout