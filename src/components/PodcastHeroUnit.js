import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PodcastHeroUnit = () => {
    return (
      <div>
        <Jumbotron>
          <h1>Podcast</h1>
          <p style={{ fontSize: "18px" }}>
          A weekly podcast covering Golden Hurricane athletics at The University of Tulsa.
          </p>
          <br />
          <Container>
            <Row>
                <Col>
                    <a rel="noopener noreferrer" target="_blank" href="https://podcasts.apple.com/us/podcast/the-golden-hurricast/id1435008302?mt=2">
                        <img src={require("../../static/PodcastBadge_Apple.svg")} alt="Listen on Apple Podcasts" height="35px"/>
                    </a>
                </Col>
                <br /><br />
                <Col>
                    <a rel="noopener noreferrer" target="_blank" href="https://open.spotify.com/show/16ik0AuBrpVBfWn73jlJio">
                        <img src={require("../../static/PodcastBadge_Spotify.svg")} alt="Listen on Spotify" height="35px"/>
                    </a>
                </Col>
                <br /><br />
                <Col>
                    <a rel="noopener noreferrer" target="_blank" href="https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81MzJkN2I0L3BvZGNhc3QvcnNz">
                        <img src={require("../../static/PodcastBadge_Google.svg")} alt="Listen on Google Podcasts" width="144px"/>
                    </a>
                </Col>
                <br /><br />
                <Col>
                    <a rel="noopener noreferrer" target="_blank" href="https://overcast.fm/itunes1435008302/the-golden-hurricast">
                        <img src={require("../../static/PodcastBadge_Overcast.svg")} alt="Listen on Overcast" width="144px"/>
                    </a>
                </Col>
                <br /><br />
                <Col>
                    <a rel="noopener noreferrer" target="_blank" href="https://castro.fm/podcast/56521e78-b84b-429b-a580-073bd42d97a7">
                        <img src={require("../../static/PodcastBadge_Castro.svg")} alt="Listen on Castro" width="144px"/>
                    </a>
                </Col>
                <br /><br />
                <Col>
                    <a rel="noopener noreferrer" target="_blank" href="https://pca.st/DTV0">
                        <img src={require("../../static/PodcastBadge_PocketCasts.svg")} alt="Listen on Pocket Casts" width="144px"/>
                    </a>
                </Col>
            </Row>
        </Container>
        </Jumbotron>
      </div>
    );
}

export default PodcastHeroUnit;