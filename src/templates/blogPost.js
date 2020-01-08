import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavigationBar from '../components/NavigationBar'
import '../styles/style.css'

const Template = ({data, pageContext}) => {
    const { next, prev } = pageContext

    const {markdownRemark} = data
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html
    return (
      <div id = "blogAlignment">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
        </Helmet>

        <NavigationBar />

        <div>
          <h2
            className="blogpost"
            style={{
              marginTop: "30px",
              fontSize: "40px",
              fontWeight: "bold"
            }}
          >
            {title}
          </h2>
        </div>
        <br />
        <div
          className="blogpost"
          style={{
            marginBottom: "60px",
            fontSize: "18px"
          }}
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/*footer*/}
        <div>
          <Navbar fixed="bottom" expand="lg" bg="light" variant="light">
            <Nav className="mr-auto">
              {prev && <Link to={prev.frontmatter.path}>Previous</Link>}
            </Nav>
            <Nav className="ml-auto">
              {next && <Link to={next.frontmatter.path}>Next</Link>}
            </Nav>
          </Navbar>
        </div>
      </div>
    );
}

export const query = graphql `
    query($pathSlug: String!) {
        markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
            html
            frontmatter {
                title
            }
        }
    }
`

export default Template