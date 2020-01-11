import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Jumbotron from 'react-bootstrap/Jumbotron'
import { ButtonToolbar } from "react-bootstrap"
import { SocialIcon } from 'react-social-icons'

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
            <SocialIcon
              style={{
                height: "35px",
                width: "35px"
              }}
              rel="noopener noreferrer"
              target="_blank"
              url="https://twitter.com/goldenhurricast"
            />
            <SocialIcon
              style={{ height: "35px", width: "35px", marginLeft: "20px" }}
              rel="noopener noreferrer"
              target="_blank"
              url="https://instagram.com/goldenhurricast"
            />
            <SocialIcon
              style={{ height: "35px", width: "35px", marginLeft: "20px" }}
              rel="noopener noreferrer"
              target="_blank"
              url="https://itunes.apple.com/us/podcast/the-golden-hurricast/id1435008302"
              img
            />
            <SocialIcon
              style={{ height: "35px", width: "35px", marginLeft: "20px" }}
              rel="noopener noreferrer"
              target="_blank"
              url="https://open.spotify.com/show/16ik0AuBrpVBfWn73jlJio"
            />
            <SocialIcon
              style={{ height: "35px", width: "35px", marginLeft: "20px" }}
              rel="noopener noreferrer"
              target="_blank"
              url="https://anchor.fm/thegoldenhurricast"
            />
            <SocialIcon
              style={{ height: "35px", width: "35px", marginLeft: "20px" }}
              rel="noopener noreferrer"
              target="_blank"
              url="mailto:thegoldenhurricast@gmail.com"
            />
          </ButtonToolbar>
        </Jumbotron>
      </div>
    );
}

export default HomeHeroUnit;