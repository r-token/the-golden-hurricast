import React from "react"

import Container from 'react-bootstrap/Container';
import Seo from "../components/seo"

import Products from "../components/products/Products"

const AdvancedExamplePage = () => (
	<Container>
		<Seo
			title={"Hurricast Advanced"}
			description={"Buy some advanced Hurricast merchandise!"}
			image={"/logo-white.jpg"}
		/>
		<h1>This is the advanced example</h1>
		<Products />
	</Container>
)

export default AdvancedExamplePage