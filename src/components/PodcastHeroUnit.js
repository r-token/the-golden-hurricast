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
          A weekly podcast covering Golden Hurricane athletics at The University of Tulsa by Ryan Token, Matt Rechtien, and Pat Fox.
          </p>
          <br />
          <Container>
            <Row>
                <Col>
                    <a rel="noopener noreferrer" target="_blank" href="https://podcasts.apple.com/us/podcast/the-golden-hurricast/id1435008302?mt=2">
                        <img src="../../public/PodcastBadge_Apple.svg" alt="Listen on Apple Podcasts" height="40px"/>
                    </a>
                </Col>
                <br /><br />
                <Col>
                    <a rel="noopener noreferrer" target="_blank" href="https://open.spotify.com/show/16ik0AuBrpVBfWn73jlJio">
                        <img src="../../public/PodcastBadge_Spotify.svg" alt="Listen on Spotify" height="40px"/>
                    </a>
                </Col>
                <br /><br />
                <Col>
                    <a rel="noopener noreferrer" target="_blank" href="https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81MzJkN2I0L3BvZGNhc3QvcnNz">
                        <img src="../../public/PodcastBadge_Google.svg" alt="Listen on Google Podcasts" width="165px"/>
                    </a>
                </Col>
                <br /><br />
                <Col>
                    <a rel="noopener noreferrer" target="_blank" href="https://overcast.fm/itunes1435008302/the-golden-hurricast">
                        <img src="../../public/PodcastBadge_Overcast.svg" alt="Listen on Overcast" width="165px"/>
                    </a>
                </Col>
                <br /><br />
                <Col>
                    <a rel="noopener noreferrer" target="_blank" href="https://castro.fm/podcast/56521e78-b84b-429b-a580-073bd42d97a7">
                        <img src="../../public/PodcastBadge_Castro.svg" alt="Listen on Castro" width="165px"/>
                    </a>
                </Col>
                <br /><br />
                <Col>
                    <a rel="noopener noreferrer" target="_blank" href="https://pca.st/DTV0">
                        <img src="../../public/PodcastBadge_PocketCasts.svg" alt="Listen on Pocket Casts" width="165px"/>
                    </a>
                </Col>
            </Row>
        </Container>
        </Jumbotron>
      </div>
    );
}

export default PodcastHeroUnit;