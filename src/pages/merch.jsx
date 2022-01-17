import React from "react";
import NavigationBar from "../components/NavigationBar";
import Container from 'react-bootstrap/Container';
import MerchJumbotron from '../components/MerchJumbotron'
import Seo from '../components/seo'
import Products from "../components/products/Products"
import { Helmet } from "react-helmet";

const MerchLayout = () => {
	return (
		<div>
			<Seo
				title={"Hurricast Merch"}
				description={"Buy some Hurricast merchandise!"}
				image={"/logo-white.jpg"}
			/>
			<Helmet>
				<meta charSet="utf-8" />
				<title>TGH | Merch</title>
			</Helmet>

			<NavigationBar />
			<MerchJumbotron />

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
				<Container id="supportus" style={{marginTop: '-75px'}}>

					<p style={{ marginBottom: "30px" }}>
						We've teamed up with <a href="https://www.mythic.press/" rel="noopener noreferrer"
						target="_blank">
						Mythic
						</a>
						{" "}
						here in Tulsa to design and create the clothing. We use <a href="https://stripe.com/" rel="noopener noreferrer"
						target="_blank">
						Stripe
						</a>
						{" "}
						to handle payments and orders.
					</p>

					<h4> Hurricast Merchandise </h4>
					<hr />
					<div>
						{" "}
						<Products />
					</div>
					
				</Container>
			</div>
		</div>
	);
};

export default MerchLayout;