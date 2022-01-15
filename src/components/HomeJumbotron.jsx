import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { ButtonToolbar } from "react-bootstrap"

const HomeJumbotron = () => {
    return (
      <div>
        <Jumbotron>
          <Container>
            <h1>The Golden Hurricast</h1>
            <p style={{ fontSize: "18px" }}>
              The leading independent podcast and blog covering Golden Hurricane
              athletics at The University of Tulsa.
            </p>
            <ButtonToolbar>
              <a
                style={{marginRight: "15px"}}
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/goldenhurricast"
              >
                <picture>
                  <source type="image/webp" srcSet={require("../../static/brand_icons/twitter.webp")} style={{ height: "35px", width: "35px" }} />
                  <img src={require("../../static/brand_icons/twitter.png")} alt="Twitter icon" style={{ height: "35px", width: "35px" }} />
                </picture>
              </a>

              <a
                style={{ marginRight: "15px" }}
                rel="noopener noreferrer"
                target="_blank"
                href="https://instagram.com/goldenhurricast"
              >
                <picture>
                  <source type="image/webp" srcSet={require("../../static/brand_icons/instagram.webp")} style={{ height: "35px", width: "35px" }} />
                  <img src={require("../../static/brand_icons/instagram.png")} alt="Instagram icon" style={{ height: "35px", width: "35px" }} />
                </picture>
              </a>

              <a
                style={{ marginRight: "15px" }}
                rel="noopener noreferrer"
                target="_blank"
                href="https://podcasts.apple.com/us/podcast/the-golden-hurricast/id1435008302?mt=2"
              >
                <picture>
                  <source type="image/webp" srcSet={require("../../static/brand_icons/applePodcasts.webp")} style={{ height: "35px", width: "35px" }} />
                  <img src={require("../../static/brand_icons/applePodcasts.png")} alt="Apple Podcasts icon" style={{ height: "35px", width: "35px" }} />
                </picture>
              </a>

              <a
                style={{ marginRight: "15px" }}
                rel="noopener noreferrer"
                target="_blank"
                href="https://open.spotify.com/show/16ik0AuBrpVBfWn73jlJio"
              >
                <picture>
                  <source type="image/webp" srcSet={require("../../static/brand_icons/spotify.webp")} style={{ height: "35px", width: "35px" }} />
                  <img src={require("../../static/brand_icons/spotify.png")} alt="Spotify icon" style={{ height: "35px", width: "35px" }} />
                </picture>
              </a>

              <a
                style={{ marginRight: "15px" }}
                rel="noopener noreferrer"
                target="_blank"
                href="https://overcast.fm/itunes1435008302/the-golden-hurricast"
              >
                <picture>
                  <source type="image/webp" srcSet={require("../../static/brand_icons/overcast.webp")} style={{ height: "35px", width: "35px" }} />
                  <img src={require("../../static/brand_icons/overcast.png")} alt="Overcast icon" style={{ height: "35px", width: "35px" }} />
                </picture>
              </a>

              <a
                style={{ marginRight: "15px" }}
                rel="noopener noreferrer"
                target="_blank"
                href="mailto:thegoldenhurricast@gmail.com"
              >
                <picture>
                  <source type="image/webp" srcSet={require("../../static/brand_icons/email.webp")} style={{ height: "35px", width: "35px" }} />
                  <img src={require("../../static/brand_icons/email.png")} alt="Email icon" style={{ height: "35px", width: "35px" }} />
                </picture>
              </a>
            </ButtonToolbar>
          </Container>
        </Jumbotron>
      </div>
    );
}

export default HomeJumbotron;