import React from "react";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";

const AboutLayout = () => {
  return (
    <div>
      <NavigationBar />
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "avenir"
        }}
      >
          About us.
      </div>
    </div>
  );
};

export default AboutLayout;
