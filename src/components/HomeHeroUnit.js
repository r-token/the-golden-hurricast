import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Jumbotron from 'react-bootstrap/Jumbotron'
import { ButtonToolbar } from "react-bootstrap"

const HomeHeroUnit = () => {
    return (
      <div>
        <Jumbotron>
          <h1>The Golden Hurricast</h1>
          <p style={{ fontSize: "18px" }}>
            The leading independent podcast and blog covering Golden Hurricane
            athletics at The University of Tulsa.
          </p>
          <ButtonToolbar>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/goldenhurricast"
            >
              <img
                style={{
                  height: "35px",
                  width: "35px"
                }}
                alt="Twitter icon"
                src={require("../../static/brand_icons/twitter.png")}
              />
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://instagram.com/goldenhurricast"
            >
              <img
                style={{ height: "35px", width: "35px", marginLeft: "20px" }}
                alt="Instagram icon"
                src={require("../../static/brand_icons/instagram.png")}
              />
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://itunes.apple.com/us/podcast/the-golden-hurricast/id1435008302"
            >
              <img
                style={{ height: "35px", width: "35px", marginLeft: "20px" }}
                alt="Apple Podcasts icon"
                src={require("../../static/brand_icons/applePodcasts.png")}
              />
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://open.spotify.com/show/16ik0AuBrpVBfWn73jlJio"
            >
              <img
                style={{ height: "35px", width: "35px", marginLeft: "20px" }}
                alt="Spotify icon"
                src={require("../../static/brand_icons/spotify.png")}
              />
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://anchor.fm/thegoldenhurricast"
            >
              <img
                style={{ height: "35px", width: "35px", marginLeft: "20px" }}
                alt="Anchor icon"
                src={require("../../static/brand_icons/anchor.png")}
              />
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:thegoldenhurricast@gmail.com"
            >
              <img
                style={{ height: "35px", width: "35px", marginLeft: "20px" }}
                alt="Email the golden hurricast"
                src={require("../../static/brand_icons/email.png")}
              />
            </a>
          </ButtonToolbar>
        </Jumbotron>
      </div>
    );
}

export default HomeHeroUnit;