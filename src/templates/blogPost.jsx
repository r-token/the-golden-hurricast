import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavigationBar from '../components/NavigationBar'
import SEO from '../components/seo'
import '../styles/style.css'

const Template = ({data, pageContext}) => {
    const { next, prev } = pageContext

    const { markdownRemark } = data
    const title = markdownRemark.frontmatter.title
    const authors = markdownRemark.frontmatter.authors
    const date = markdownRemark.frontmatter.date
    const html = markdownRemark.html
    const excerpt = markdownRemark.frontmatter.excerpt
    const path = markdownRemark.frontmatter.path

    const disqusConfig = {
      shortname: "thegoldenhurricast",
      config: { identifier: title },
    };

    return (
      <div>
        <SEO
          title={title}
          description={excerpt || ''}
          image={"/logo-white.jpg"}
          pathname={path}
          article
        />
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
        </Helmet>

        <NavigationBar />

        <div id="blogAlignment">

          <div
            className="blogpost"
            style={{
              marginTop: "55px",
            }}
          >
            <h2 style={{ fontSize: "40px", fontWeight: "bold" }}>{title}</h2>
            <p style={{ fontSize: "16px", color: "grey" }}>
              By: {authors}
              <br />
              Date: {date}{" "}
            </p>
          </div>

          <br />

          <div
            className="blogpost"
            style={{
              marginBottom: "60px",
              fontSize: "18px",
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <div style={{padding: '15px', marginBottom: '25px'}}>
            <DiscussionEmbed {...disqusConfig} />
          </div>

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
      </div>
    );
}

export const query = graphql `
    query($pathSlug: String!) {
        markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
            html
            frontmatter {
                title
                excerpt
                authors
                date
            }
        }
    }
`

export default Template