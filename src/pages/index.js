import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Helmet } from "react-helmet"
import NavigationBar from "../components/NavigationBar"
import HomeHeroUnit from "../components/HomeHeroUnit"
import "../styles/style.css";

const HomeLayout = () => {
  return (
    <div>
      <NavigationBar />
      <HomeHeroUnit />
      <div
        style={{
          marginTop: "30px",
          marginLeft: "30px",
          marginRight: "30px",
          marginBottom: "30px",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Podcast</title>
        </Helmet>

    
      </div>
    </div>
  );
};

export default HomeLayout;
