import React from "react"
import Container from 'react-bootstrap/Container'
import NavigationBar from "../components/NavigationBar"
import PodcastJumbotron from "../components/PodcastJumbotron"
import Seo from '../components/seo'
import { Helmet } from "react-helmet"

const PodcastLayout = () => {
  return (
    <div>
      <Seo
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
        <div>
          <Container className="podstyle">
            <h4>Listen to the Show</h4>
            <hr />
          </Container>
          <iframe src="https://embed.podcasts.apple.com/us/podcast/the-golden-hurricast/id1435008302?itsct=podcast_box&amp;itscg=30200" height="450px" title="apple-embedded-player" frameBorder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *;" style={{display: "flex", marginLeft: "auto", marginRight: "auto", width: "100%", maxWidth: "825px", overflow: "hidden", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px", backgroundColor: "transparent", backgroundPosition: "initial initial", backgroundRepeat: "initial initial"}}></iframe>
        </div>
        <br />
      </div>
    </div>
  );
};

export default PodcastLayout;
