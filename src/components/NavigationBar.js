import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const NavigationBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            style={{ marginRight: 15 }}
            src={require("../../static/logo-navbar.png")}
            height="48"
            width="50"
            alt="The Golden Hurricast logo"
            className="img-responsive"
          />
          The Golden Hurricast
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Blog</Nav.Link>
            <Nav.Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://anchor.fm/thegoldenhurricast"
            >
              Podcast
            </Nav.Link>
            <Nav.Link href="../about">About</Nav.Link>
            <Nav.Link href="../support">Support</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar