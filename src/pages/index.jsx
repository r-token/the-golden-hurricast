import React from "react"
import Button from 'react-bootstrap/Button'
import { graphql, Link } from 'gatsby'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import NavigationBar from "../components/NavigationBar"
import HomeJumbotron from "../components/HomeJumbotron"
import Seo from '../components/seo'
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed"

import "bootstrap/dist/css/bootstrap.min.css"

const HomeLayout = ({data}) => {
  const { edges } = data.allMarkdownRemark
  const latestPost = edges[0]
  const { frontmatter } = latestPost.node
  
  return (
    <div>
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
              {/* <Row style={{ width: '220px', margin: '0px'}}>
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
              </Row> */}
              <Row>
                <iframe title="Apple Podcasts Embed" src="https://embed.podcasts.apple.com/us/podcast/the-golden-hurricast/id1435008302?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=light" height="450px" frameBorder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write" style={{display: "flex", marginLeft: "auto", marginRight: "auto", width: "100%", maxWidth: "660px", overflow: "hidden", borderRadius: "10px", backgroundColor: "transparent"}}></iframe>
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
                <h6 style={{marginBottom: "1rem"}}>Latest blog post:</h6>
              </Row>
              <Row>
                <div key={Math.random()} className="pull-left">
                  <Container style={{padding: '0px'}}>
                      <Link
                        style={{
                          textDecoration: "none"
                        }}
                        
                        to={`${frontmatter.path}`}
                      >
                        <div
                          key={frontmatter.path}
                          className="floating_still_blog"
                        >
                          <p className="blog_title">
                            {frontmatter.title}
                          </p>
            
                          <p className="blog_bylines">
                            {frontmatter.date}
                          </p>
                          <p className="blog_bylines">
                            {frontmatter.excerpt}
                          </p>
                        </div>
                      </Link>
                  </Container>
                </div>
              </Row>
              
              <br />
              
              <Row>
                <p>
                  <Button variant="outline-primary" href="/blog">
                    See all posts
                  </Button>
                </p>
              </Row>
              
              <br /> <br />
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
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="GoldenHurricast"
                  options={{ height: 500, width: 500 }}
                />
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
      
      <a rel="me" href="https://indieweb.social/@ryantoken"></a>
    </div>
  )
}

export const query = graphql`
   query LatestBlogQuery {
     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___sortDate] }, limit: 1) {
       edges {
         node {
           id
           frontmatter {
             title
             path
             date
             sortDate
             excerpt
           }
         }
       }
     }
   }
 `

export default HomeLayout

export const Head = () => {
  return (
    <>
      <Seo
        title={"The Golden Hurricast"}
        description={"The leading independent podcast and blog covering Golden Hurricane athletics at The University of Tulsa"}
        image={"/logo-white.jpg"}
      />
      <meta charSet="utf-8" />
      <title>The Golden Hurricast</title> 
    </>
  )
}