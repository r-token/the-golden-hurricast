import React from "react"
import Container from 'react-bootstrap/Container'

const MerchJumbotron = () => {
		return (
			<div className="jumbotron">
					<Container className="container_style">
						<h1>Merch</h1>
						<p style={{ fontSize: "18px" }}>
							Love the Hurricast? Love supporting local Tulsa businesses? Just want a shirt with Herc the Hurricane on it? Buying merchandise from us provides all of this and more.
						</p>
					</Container>
			</div>
		);
}

export default MerchJumbotron;