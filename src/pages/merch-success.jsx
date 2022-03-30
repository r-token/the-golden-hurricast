import React, { useEffect } from "react"
import Button from 'react-bootstrap/Button'
import NavigationBar from "../components/NavigationBar"
import Container from 'react-bootstrap/Container'
import { Helmet } from "react-helmet"
import { addOrderToTable } from '../api/merch-api'

const MerchLayout = () => {
	const isBrowser = () => typeof window !== "undefined"
	if (!isBrowser()) {
		return ( <div> Error rendering page </div>)
	}
	
	var params = new Proxy(new URLSearchParams(window.location.search), {
		get: (searchParams, prop) => searchParams.get(prop),
	})
	
	let productId = params.productId
	let orderId = params.orderId
	let quantity = params.quantity
	
	useEffect(() => {
		addOrderToTable(productId, orderId, quantity)
	}, [productId, orderId, quantity])
	
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>TGH | Merch Success!</title>
			</Helmet>
	
			<NavigationBar />
	
			<div
				style={{
					marginTop: "110px",
					marginBottom: "30px",
					marginLeft: "30px",
					marginRight: "30px",
					display: "flex",
					alignItems: "center"
				}}
			>
				<Container id="supportus">
					<h4> Order Successful! </h4>
					<hr />
					<div style={{ marginBottom: "25px" }}>
						<p style={{ marginBottom: "15px" }}>
							Thank you!
						</p>
						
						<p style={{ marginBottom: "15px" }}>
							If you bought a shirt or a hoodie, <a href="https://www.mythic.press" target="_blank" rel="noopener noreferrer">Mythic Press</a> will be handling shipping for this first batch of orders. We will send this first batch over to them to ship out around April 6th. After that, we plan to take over shipping ourselves.
						</p>
						
						<p style={{ marginBottom: "15px" }}>
							If you bought a mug or another item that isn't apparel, we will be handling shipping ourselves. Look for an email from us (<a href="mailto:thegoldenhurricast@gmail.com">thegoldenhurricast@gmail.com</a>) over the next couple of days with the tracking number for your shipment.
						</p>
						
						<p style={{ marginBottom: "15px" }}>
							<b>Thank you</b> for your support! If you have any questions or concerns about your order, please email us at <a href="mailto:thegoldenhurricast@gmail.com">thegoldenhurricast@gmail.com</a>
						</p>
						
						<p style={{ marginBottom: "15px" }}>
							— Ryan & Matt
						</p>
					</div>
					
					<div>
						<Button variant="outline-primary" href="/merch" style={{ marginRight:  "20px"}}>
							Back to merch
						</Button>
						
						<Button variant="outline-primary" href="/">
							Back home
						</Button>
					</div>
					
				</Container>
			</div>
		</div>
	)
}

export default MerchLayout;