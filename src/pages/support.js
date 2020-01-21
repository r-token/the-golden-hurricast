import React from "react";
import { Helmet } from "react-helmet";
import NavigationBar from "../components/NavigationBar";
import "../styles/style.css";

const SupportLayout = () => {
  return (
    <div>
      <NavigationBar />
      <div
        style={{
          marginTop: "100px",
          marginLeft: "30px",
          marginRight: "30px",
          marginBottom: "30px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>TGH | Support Us</title>
        </Helmet>

        <h2>Support Us</h2>
        <br />
        <p>
          We do all of this for free and for the love of TU athletics. If you
          have the means to do so, there are two ways to support the podcast and
          the blog.
        </p>
        <p></p>

        <br />

        <h4> How to Support Us </h4>
        <hr />
        <p>
          {" "}
          <b>Way #1:</b> Make a{" "}
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
          <b>Way #2:</b> Sign up for a recurring monthly donation. You can do
          that by clicking{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://anchor.fm/thegoldenhurricast"
          >
            here
          </a>{" "}
          and then clicking the 'Support' button. From there, you can choose to
          contribute $0.99/month, $4.99/month, or $9.99/month.
        </p>
      </div>
    </div>
  );
};

export default SupportLayout;
