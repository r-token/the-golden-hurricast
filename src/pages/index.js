import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet"
import NavigationBar from "../components/NavigationBar"
import HomeHeroUnit from "../components/HomeHeroUnit"
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";
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
          <title>The Golden Hurricast</title>
        </Helmet>

        <Container>
          <Row>
            <Col md={6}>
              <Row>
                <h5>Podcast</h5>
              </Row>
              <hr />
              <Row>
                <p>
                  The Golden Hurricast is a weekly podcast covering Golden
                  Hurricane athletics at The University of Tulsa.
                </p>
                <p>
                  <a href="/podcast">Listen to our podcast.</a>
                </p>
              </Row>
              <Row>
                <img
                  style={{
                    display: "inline-block",
                    height: "200px",
                    width: "200px"
                  }}
                  src={require("../../static/logo-full.png")}
                  alt="the golden hurricast logo"
                />
              </Row>

              <br />

              <Row>
                <h5>Blog</h5>
              </Row>
              <hr />
              <Row>
                <p>
                  Affectionately known as Herc's Corner, our goal with this blog
                  is to dive deeper into stats, explore TU history, and write
                  about interesting milestones as Tulsa athletics continues to
                  progress.
                </p>
                <p>
                  <a href="/blog">Read our blog.</a>
                </p>
                <br /> <br /> <br />
              </Row>
            </Col>

            <Col md={{ span: 5, offset: 1 }}>
              <Row>
                <h5>Twitter</h5>
              </Row>
              <hr />
              <Row>
                <TwitterFollowButton screenName={"GoldenHurricast"} />
              </Row>
              <br />
              <Row>
                <div
                  style={{
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderColor: "lightgrey",
                    borderRadius: "5px"
                  }}
                >
                  <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="GoldenHurricast"
                    options={{ height: 400, width: 400 }}
                  />
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomeLayout;
