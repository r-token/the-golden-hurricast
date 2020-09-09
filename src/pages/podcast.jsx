import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Helmet } from "react-helmet"
import NavigationBar from "../components/NavigationBar"
import PodcastJumbotron from "../components/PodcastJumbotron"
import LatestEpisode from "../components/LatestEpisode"
import SEO from '../components/seo'
import "../styles/style.css";

const PodcastLayout = () => {
  return (
    <div>
      <SEO
        title={"The Golden Hurricast – Podcast"}
        description={
          "A weekly podcast covering Golden Hurricane athletics at The University of Tulsa"
        }
        image={"/logo-white.jpg"}
      />
      <Helmet>
        <meta charSet="utf-8" />
        <title>TGH | Podcast</title>
      </Helmet>

      <NavigationBar />
      <PodcastJumbotron />

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
              All of our episodes are available on the web at{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://anchor.fm/thegoldenhurricast"
              >
                Anchor.fm
              </a>
            </p>
          </Container>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Container className="podstyle">
            <p>
              You can also find our podcast on <b>10 different platforms</b>:
              Apple Podcasts, Spotify, Google Podcasts, Overcast, Castro,
              Stitcher, Breaker, Castbox, Pocket Casts, and RadioPublic. Just
              search for "The Golden Hurricast".
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
        <LatestEpisode />
        <br /> <br /> <br />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Container className="podstyle">
            <h4>Previous 4 Episodes</h4>
            <hr style={{ width: "100%" }} />
          </Container>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Container className="podstyle">
            <Row md={12}>
              <Col sm={12} lg={6} style={{ marginBottom: "20px" }}>
                <iframe
                  className="floating_still_podcast"
                  src="https://anchor.fm/thegoldenhurricast/embed/episodes/3-1-Return-of-the-Hurricast-ft--Bruce-Howard-eit044"
                  title="3-1: Return of the Hurricast (ft. Bruce Howard)"
                  height="102px"
                  width="300px"
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
              </Col>
              <Col sm={12} lg={6} style={{ marginBottom: "20px" }}>
                <iframe
                  className="floating_still_podcast"
                  src="https://anchor.fm/thegoldenhurricast/embed/episodes/2-28-Not-the-End-We-Wanted-ebkh55"
                  title="2-28: Not the End We Wanted"
                  height="102px"
                  width="300px"
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
              </Col>
            </Row>
            <br />
            <Row>
              <Col sm={12} lg={6} style={{ marginBottom: "20px" }}>
                <iframe
                  className="floating_still_podcast"
                  src="https://anchor.fm/thegoldenhurricast/embed/episodes/2-27-Conference-Champs--Postseason-Predictions-ebd5sj"
                  title="2-27: Conference Champs and Postseason Predictions"
                  height="102px"
                  width="300px"
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
              </Col>
              <Col sm={12} lg={6} style={{ marginBottom: "20px" }}>
                <iframe
                  className="floating_still_podcast"
                  src="https://anchor.fm/thegoldenhurricast/embed/episodes/2-26-Have-Yourself-a-Week-Lawson-eb7dpe"
                  title="2-26: Have Yourself a Week, Lawson"
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
