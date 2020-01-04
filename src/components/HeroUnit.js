import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from 'react-bootstrap/Jumbotron';
import { ButtonToolbar } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';

const HeroUnit = () => {
    return (
      <div>
        <Jumbotron>
          <h1>The Golden Hurricast</h1>
          <p style = {{fontSize: "18px"}}>
            The leading independent podcast and blog covering Golden Hurricane
            athletics at The University of Tulsa
          </p>
          <ButtonToolbar>
            <SocialIcon
              style={{
                height: "35px",
                width: "35px"
              }}
              url="https://twitter.com/thegoldenhurricast"
            />
            <SocialIcon
              style={{ height: "35px", width: "35px", marginLeft: "20px" }}
              url="https://instagram.com/thegoldenhurricast"
            />
            <SocialIcon
              style={{ height: "35px", width: "35px", marginLeft: "20px" }}
              target="_blank"
              url="https://anchor.fm/thegoldenhurricast"
            />
            <SocialIcon
              style={{ height: "35px", width: "35px", marginLeft: "20px" }}
              target="_blank"
              url="mailto:thegoldenhurricast@gmail.com"
            />
          </ButtonToolbar>
        </Jumbotron>
      </div>
    );
}

export default HeroUnit;