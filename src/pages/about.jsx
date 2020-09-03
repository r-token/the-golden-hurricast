import React from "react"
import { Helmet } from "react-helmet"
import NavigationBar from "../components/NavigationBar"
import AboutJumbotron from '../components/AboutJumbotron'
import Container from 'react-bootstrap/Container'
import SEO from '../components/seo'
import "../styles/style.css";

const AboutLayout = () => {
  return (
    <div>
      <SEO
        title={"The Golden Hurricast"}
        description={"The leading independent podcast and blog covering Golden Hurricane athletics at The University of Tulsa"}
        image={"/logo-white.jpg"}
      />
      <Helmet>
        <meta charSet="utf-8" />
        <title>TGH | About</title>
      </Helmet>

      <NavigationBar />
      <AboutJumbotron />
      
      <div
        style={{
          marginTop: "130px",
          marginBottom: "30px",
          display: "flex",
          alignItems: "center"
        }}
      >

        <Container id="aboutus" style={{marginTop: '-75px'}}>
          <h4> Our Podcast </h4>
          <hr />
          <p>
            Inspired by the past success of the late Reign Cane Sports podcast,
            The Golden Hurricast took up the mantle and officially debuted in
            August of 2018. We've been lucky enough to chat with several TU legends, including Dane Evans, Bruce Howard, and Trevis Gipson.
        </p>

          <p>
            You can find our <a href="/podcast">podcast</a> on <b>10 different platforms</b>, including
            Apple Podcasts, Spotify, Google Podcasts, Stitcher, Overcast, Castro, Breaker,
            PocketCasts, and more. Just search for "The Golden Hurricast".
        </p>

          <br />

          <h4> Our Blog </h4>
          <hr />
          <p>
            In the fall of 2019, we decided to up our game a bit and create a <a href="/blog">blog</a>. Affectionately known as Herc's Corner, our blog was officially born on September 19, 2019. The name Herc's Corner comes from TU's former mascot Herc the Hurricane (also known as Huffy, but we prefer Herc).
          </p>
          <p>
            Our goal with this blog is to dive deeper into stats, explore TU history, and write about interesting milestones as Tulsa athletics continues to progress. Matt (former Sports Editor for The Collegian) kicked things off by writing a couple stat-focused articles, and Ryan joined in with {""}
            <a href="https://www.thegoldenhurricast.com/Rivalries">
              "Tulsa vs Everybody: Picking New Rivals"
          </a>
            . It's been a joint effort ever since.
        </p>

          <p>
            The blog was going well, but we became unhappy with the WordPress URL
            (hercscorner.home.blog) and some of the other WordPress limitations.
            Fortunately, Ryan works as a software developer and decided to
          build us a custom website! Thus,{" "}
            <a href="https://thegoldenhurricast.com">TheGoldenHurricast.com</a>{" "}
            was born. We have high hopes for the website, so let us know if
            there's anything you'd like us to add in the future.
        </p>

          <br />

          <h4> Contact Us </h4>
          <hr />
          <p>
            Twitter:{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/goldenhurricast"
            >
              @GoldenHurricast
          </a>
            <br />
            Instagram:{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://instagram.com/goldenhurricast"
            >
              @GoldenHurricast
          </a>
            <br />
            Anchor:{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://anchor.fm/thegoldenhurricast"
            >
              anchor.fm/TheGoldenHurricast
          </a>
            <br />
            Email:{" "}
            <a href="mailto:thegoldenhurricast@gmail.com">
              TheGoldenHurricast@gmail.com
          </a>
          </p>
        </Container>
      </div>
    </div>
  );
};

export default AboutLayout;
