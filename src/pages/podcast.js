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
      <NavigationBar />
      <PodcastHeroUnit />
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
          <title>TGH | Podcast</title>
        </Helmet>

        <p>
          All of our episodes are available on the web <a rel="noopener noreferrer" target="_blank" href="https://anchor.fm/thegoldenhurricast">here</a>.
        </p>

        <p>  
          You can also find our podcast on <b>10 different mobile platforms</b>, including Apple Podcasts, Spotify, Google Podcasts, Stitcher, Overcast, Castro, PocketCasts, and more. Just search for "The Golden Hurricast".
        </p>

        <br />

        <h5> Latest Episode </h5>
        <hr />
        <Container>
            <Row>
                <Col>
                    <iframe src="https://anchor.fm/thegoldenhurricast/embed" title="latest episode" height="102px" width="300px" frameBorder="0" scrolling="no"></iframe>
                </Col>
            </Row>
        </Container>

        <br /> <br /> <br />

        <h5> Previous 4 Episodes </h5>
        <hr />
        <Container>
            <Row>
                <Col>
                  <iframe src="https://anchor.fm/thegoldenhurricast/embed/episodes/2-19-Conference-Chaos-ea0ngk" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>
                </Col>
                <Col>
                    <iframe src="https://anchor.fm/thegoldenhurricast/embed/episodes/2-18-The-Good--the-Bad--and-the-Ugly-e9j1ct" title="thegood, thebad, and theugly" height="102px" width="300px" frameBorder="0" scrolling="no"></iframe>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <iframe src="https://anchor.fm/thegoldenhurricast/embed/episodes/2-17-And-Now-Our-MontyWatch-is-Ended-e9dlc6" title="and now our monty watch is ended" height="102px" width="300px" frameBorder="0" scrolling="no"></iframe>
                </Col>
                <Col>
                    <iframe src="https://anchor.fm/thegoldenhurricast/embed/episodes/2-16-The-Ugly-Week-ft--The-Sports-Objective-Podcast-e97jkk" title="the ugly week" height="102px" width="300px" frameBorder="0" scrolling="no"></iframe>
                </Col>
            </Row>
        </Container>

        <br />

    
      </div>
    </div>
  );
};

export default PodcastLayout;
