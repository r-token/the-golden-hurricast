import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const LatestEpisode = () => {
    return (
        <div style={{ display: "flex"}}>
            <Container className="podstyle">
            <Row>
                <Col>
                <iframe 
                    className="floating_still_podcast"
                    src="https://anchor.fm/thegoldenhurricast/embed"
                    title="latest episode"
                    height="102px"
                    width="300px"
                    frameBorder="0"
                    scrolling="no"
                ></iframe>
                </Col>
            </Row>
            </Container>
        </div>
    );
}

export default LatestEpisode;