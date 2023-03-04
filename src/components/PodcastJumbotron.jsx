import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PodcastJumbotron = () => {
    return ( 
      <div className="jumbotron">
        <Container className="container_style">
            <h1>The Golden Hurricast</h1>
            <p style={{ fontSize: "18px" }}>
                A weekly podcast covering Golden Hurricane athletics at The University of Tulsa.
            </p>
            <br />
            <Row md={12}>
                <Col xs={6} xl={2}>
                    <a rel="noopener noreferrer" target="_blank" href="https://podcasts.apple.com/us/podcast/the-golden-hurricast/id1435008302?mt=2">
                        <img src="/listenOnX/listenOn_Apple.svg" alt="Listen on Apple Podcasts" width="139px"/>
                    </a>
                </Col>
                <br /><br />
                <Col xs={6} xl={2}>
                    <a rel="noopener noreferrer" target="_blank" href="https://open.spotify.com/show/16ik0AuBrpVBfWn73jlJio">
                        <img src="/listenOnX/listenOn_Spotify.svg" alt="Listen on Spotify" width="139px"/>
                    </a>
                </Col>
                <br /> <br />
                <Col xs={6} xl={2}>
                    <a rel="noopener noreferrer" target="_blank" href="https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81MzJkN2I0L3BvZGNhc3QvcnNz">
                        <img src="/listenOnX/listenOn_Google.svg" alt="Listen on Google Podcasts" width="139px"/>
                    </a>
                </Col>
                <br /> <br />
                <Col xs={6} xl={2}>
                    <a rel="noopener noreferrer" target="_blank" href="https://overcast.fm/itunes1435008302/the-golden-hurricast">
                        <img src="/listenOnX/listenOn_Overcast.svg" alt="Listen on Overcast" width="139px"/>
                    </a>
                </Col>
                <br /> <br />
                <Col xs={6} xl={2}>
                    <a rel="noopener noreferrer" target="_blank" href="https://castro.fm/podcast/56521e78-b84b-429b-a580-073bd42d97a7">
                        <img src="/listenOnX/listenOn_Castro.svg" alt="Listen on Castro" width="139px"/>
                    </a>
                </Col>
                <br /><br />
                <Col xs={6} xl={2}>
                    <a rel="noopener noreferrer" target="_blank" href="https://pca.st/DTV0">
                        <img src="/listenOnX/listenOn_PocketCasts.svg" alt="Listen on Pocket Casts" width="139px"/>
                    </a>
                </Col>
            </Row>
        </Container>
      </div>
    )
}

export default PodcastJumbotron