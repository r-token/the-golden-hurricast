import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavigationBar from '../components/NavigationBar'

const Template = ({data, pageContext}) => {
    const { next, prev } = pageContext

    const {markdownRemark} = data
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
        </Helmet>

        <NavigationBar />
        <h2
          style={{
            marginTop: "30px",
            marginLeft: "30px",
            marginRight: "30px",
            fontFamily: "Helvetica Neue"
          }}
        >
          {title}
        </h2>
        <br />
        <div
          className="blogpost"
          dangerouslySetInnerHTML={{ __html: html }}
          style={{
            marginLeft: "30px",
            marginRight: "30px",
            marginBottom: "30px",
            fontFamily: "Avenir"
          }}
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