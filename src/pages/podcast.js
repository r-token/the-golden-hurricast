import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Helmet } from "react-helmet"
import NavigationBar from "../components/NavigationBar"
import PodcastHeroUnit from "../components/PodcastHeroUnit"
import "../styles/style.css";

const PodcastLayout = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TGH | Podcast</title>
      </Helmet>

      <NavigationBar />
      <PodcastHeroUnit />

      <div
        style={{
          marginTop: "30px",
          marginLeft: "30px",
          marginRight: "30px",
          marginBottom: "30px",
        }}
      >

        <div style={{ display: "flex", alignItems: "center" }}>
          <Container className="podstyle">
            <p>
              All of our episodes are available on the web{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://anchor.fm/thegoldenhurricast"
              >
                here
          </a>
              .
        </p>
          </Container>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Container className="podstyle">
            <p>
              You can also find our podcast on <b>10 different mobile platforms</b>,
              including Apple Podcasts, Spotify, Google Podcasts, Stitcher,
              Overcast, Castro, PocketCasts, and more. Just search for "The Golden
              Hurricast".
          </p>
          </Container>
        </div>

        <br />

        <div style={{ display: "flex", alignItems: "center" }}>
          <Container className="podstyle">
            <h4>Latest Episode</h4>
            <hr style={{ width: "100%" }} />
          </Container>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Container className="podstyle">
            <Row>
              <Col>
                <iframe
                  src="https://anchor.fm/thegoldenhurricast/embed"
                  title="latest episode"
                  height="102px"
                  width="300px"
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
              </Col>
            </Row>
          </Container>
        </div>
        <br /> <br /> <br />
        
        <div style={{ display: "flex", alignItems: "center" }}>
          <Container className="podstyle">
            <h4>Previous 4 Episodes</h4>
            <hr style={{ width: "100%" }} />
          </Container>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Container className="podstyle">
            <Row>
              <Col>
                <iframe
                  src="https://anchor.fm/thegoldenhurricast/embed/episodes/2-20-Threes-are-the-Bees-Knees-ft--The-Sports-Objective-Podcast-ea5t1l"
                  title="Threes are the Bees Knees"
                  height="102px"
                  width="300px"
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
              </Col>
              <Col>
                <iframe
                  src="https://anchor.fm/thegoldenhurricast/embed/episodes/2-19-Conference-Chaos-ea0ngk"
                  title="Conference Chaos"
                  height="102px"
                  width="300px"
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <iframe
                  src="https://anchor.fm/thegoldenhurricast/embed/episodes/2-18-The-Good--the-Bad--and-the-Ugly-e9j1ct"
                  title="thegood, thebad, and theugly"
                  height="102px"
                  width="300px"
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
              </Col>
              <Col>
                <iframe
                  src="https://anchor.fm/thegoldenhurricast/embed/episodes/2-17-And-Now-Our-MontyWatch-is-Ended-e9dlc6"
                  title="and now our monty watch is ended"
                  height="102px"
                  width="300px"
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
              </Col>
            </Row>
          </Container>
        </div>
        <br />
      </div>
    </div>
  );
};

export default PodcastLayout;
