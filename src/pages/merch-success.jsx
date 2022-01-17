import React from "react";
import Button from 'react-bootstrap/Button'
import NavigationBar from "../components/NavigationBar";
import Container from 'react-bootstrap/Container';
import { Helmet } from "react-helmet";

const MerchLayout = () => {
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
							You should receive an email confirming that your order was received. We'll be in touch about shipping.
						</p>
						
						<p style={{ marginBottom: "15px" }}>
							Thank you for your support!
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
	);
};

export default MerchLayout;