import React from "react";
import NavigationBar from "../components/NavigationBar";
import Container from 'react-bootstrap/Container';
import SupportJumbotron from '../components/SupportJumbotron'
import Seo from '../components/seo'
import { Helmet } from "react-helmet";

const SupportLayout = () => {
  return (
    <div>
      <Seo
        title={"Support The Golden Hurricast"}
        description={"We do all of this for free and for the love of TU athletics"}
        image={"/logo-white.jpg"}
      />
      <Helmet>
        <meta charSet="utf-8" />
        <title>TGH | Support Us</title>
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

          <h4> How to Support Us </h4>
          <hr />
          
          <p>
            <b>Way #1:</b> Sign up for a {" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://anchor.fm/thegoldenhurricast/support"
              >
                recurring monthly donation
            </a>
            {" "}
            on Anchor (our podcast host).
          </p>
          
          <br />
          
          <p>
            {" "}
            <b>Way #2:</b> Buy our{" "}
            <a href="/merch">
              merchandise
            </a>
            .
          </p>
          
          <br />
          
          <p>
            {" "}
            <b>Way #3:</b> Make a{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://paypal.me/thegoldenhurricast"
            >
              one-time donation
          </a>{" "}
            of any amount via PayPal.
          </p>
          
          <br />
          
          <p>
            {" "}
            <b>Way #4:</b> Leave a{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/goldenhurricast"
            >
              tip on Twitter
          </a>
          . Just tap the dollar bills at the top of our profile (mobile devices only).
          </p>
          
        </Container>
      </div>
    </div>
  );
};

export default SupportLayout;
