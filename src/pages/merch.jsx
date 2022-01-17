import React from "react";
import NavigationBar from "../components/NavigationBar";
import Container from 'react-bootstrap/Container';
import SupportJumbotron from '../components/SupportJumbotron'
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
			<SupportJumbotron />

			<div
				style={{
					marginTop: "130px",
					marginBottom: "30px",
					marginLeft: "30px",
					marginRight: "30px",
					display: "flex",
					alignItems: "center"
				}}
			>
				<Container id="supportus" style={{marginTop: '-75px'}}>

					<h4> Merch </h4>
					<hr />
					<p>
						{" "}
						<Products />
					</p>
					
				</Container>
			</div>
		</div>
	);
};

export default MerchLayout;