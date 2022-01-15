import React from "react"
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavigationBar from "../components/NavigationBar"
import HomeJumbotron from "../components/HomeJumbotron"
import Seo from '../components/seo'
import { Helmet } from "react-helmet"
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";

import "bootstrap/dist/css/bootstrap.min.css"

const HomeLayout = () => {
  return (
    <div>
      <Seo
        title={"The Golden Hurricast"}
        description={"The leading independent podcast and blog covering Golden Hurricane athletics at The University of Tulsa"}
        image={"/logo-white.jpg"}
      />
      <NavigationBar />
      <HomeJumbotron />
      <div
        style={{
          marginTop: "30px",
          marginLeft: "30px",
          marginRight: "30px",
          marginBottom: "30px",
          flexDirection: "column",
          alignItems: "center",
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
                <h4>Podcast</h4>
              </Row>
              <hr />
              <Row>
                <p>
                  The Golden Hurricast is a weekly podcast covering Golden
                  Hurricane athletics at The University of Tulsa.
                </p>
              </Row>
              <Row>
                <p>
                  <Button variant="outline-primary" href="/podcast">
                    Listen to our podcast
                  </Button>
                </p>
              </Row>
              <Row style={{ width: '220px', margin: '0px'}}>
                <picture style={{padding: '10px'}} className="floating_still_image">
                  <a href="/podcast">
                    <source
                      type="image/webp"
                      srcSet='/logo-300px.webp'
                      style={{ height: "200px", width: "200px" }}
                    />
                    <img
                      src='/logo-300px.webp'
                      alt="The Golden Hurricast logo"
                      style={{ height: "200px", width: "200px" }}
                    />
                  </a>
                </picture>
              </Row>
              <br /> <br />
              <Row>
                <h4>Blog</h4>
              </Row>
              <hr />
              <Row>
                <p>
                  Affectionately known as Herc's Corner, our goal with this blog
                  is to dive deeper into stats, explore TU history, and write
                  about interesting milestones as Tulsa athletics continues to
                  progress.
                </p>
              </Row>
              <Row>
                <p>
                  <Button variant="outline-primary" href="/blog">
                    Read our blog
                  </Button>
                </p>
                <br /> <br /> <br />
              </Row>
            </Col>

            <Col md={{ span: 5, offset: 1 }}>
              <Row>
                <h4>Twitter</h4>
              </Row>
              <hr />
              <Row>
                <TwitterFollowButton screenName={"GoldenHurricast"} />
              </Row>
              <br />
              <Row style={{ margin: '0px'}}>
                <div className="floating_still_object">
                  <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="GoldenHurricast"
                    options={{ height: 500, width: 400 }}
                  />
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <script
        id="dsq-count-scr"
        src="//thegoldenhurricast.disqus.com/count.js"
        async
      ></script>
    </div>
  );
};

export default HomeLayout;
