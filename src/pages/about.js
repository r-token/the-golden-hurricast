import React from "react"
import { Helmet } from "react-helmet"
import NavigationBar from "../components/NavigationBar"

const AboutLayout = () => {
  return (
    <div>
      <NavigationBar />
      <div
        style={{
          marginTop: "30px",
          marginLeft: "30px",
          marginRight: "30px",
          marginBottom: "30px",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "Helvetica Neue"
        }}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>About</title>
        </Helmet>

        <h2>About Us</h2>
        <br />
        <p>
          The Golden Hurricast is an independent podcast and blog that covers
          all things Golden Hurricane athletics by Ryan Token, Matt Rechtien,
          and Pat Fox.
        </p>
        <p>
          We’re three TU alums, friends, and die-hard fans looking to spread the
          word about TU sports while offering some unique insight. Not
          affiliated with The University of Tulsa.
        </p>

        <br />

        <h5> Podcast </h5>
        <hr />
        <p>
          Inspired by the past success of the late Reign Cane Sports podcast,
          The Golden Hurricast took up the mantle and officially debuted in
          August of 2018. Our first podcast episode was titled 'Stay Golden',
          and we still open each episode of our podcast with an audio clip of
          Dane Evans saying that.
        </p>

        <p>
          You can find our podcast on <b>10 different platforms</b>, including
          Apple Podcasts, Spotify, Google Podcasts, Stitcher, Overcast, Breaker,
          PocketCasts, and more. Just search for "The Golden Hurricast".
        </p>

        <br />

        <h5> Blog </h5>
        <hr />
        <p>
          In the fall of 2019, we decided to up our game a bit and create a
          blog. A WordPress site was created, and Herc's Corner was officially
          born on September 19th, 2019. Matt (former Sports Editor for The
          Collegian) kicked things off by writing a couple stat-focused
          articles, and Ryan joined in with what is still our most popular blog
          post {""}
          <a
            target="_blank"
            href="https://hercscorner.home.blog/2019/10/05/tulsa-vs-everybody-picking-new-rivals/"
          >
            "Tulsa vs Everybody: Picking New Rivals"
          </a>
          .
        </p>

        <p>
          The blog was going well, but we became unhappy with the WordPress URL
          (hercscorner.home.blog) and some of the other WordPress limitations.
          Fortunately, Ryan works as an application developer and decided to
          build us our own custom website! Thus,{" "}
          <a href="https://thegoldenhurricast.com">TheGoldenHurricast.com</a>{" "}
          was born. We have high hopes for the website, so let us know if
          there's anything you'd like us to add in the future.
        </p>

        <br />

        <h5> Contact </h5>
        <hr />
        <p>
          Twitter:{" "}
          <a target="_blank" href="https://twitter.com/goldenhurricast">
            @GoldenHurricast
          </a>
          <br />
          Instagram:{" "}
          <a target="_blank" href="https://instagram.com/goldenhurricast">
            @GoldenHurricast
          </a>
          <br />
          Anchor:{" "}
          <a target="_blank" href="https://anchor.fm/thegoldenhurricast">
            anchor.fm/TheGoldenHurricast
          </a>
          <br />
          Email:{" "}
          <a href="mailto:thegoldenhurricast@gmail.com">
            TheGoldenHurricast@gmail.com
          </a> 
        </p>
      </div>
    </div>
  );
};

export default AboutLayout;
