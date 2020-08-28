import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from 'gatsby'
import NavigationBar from '../components/NavigationBar'
import BlogJumbotron from '../components/BlogJumbotron'
import Container from 'react-bootstrap/Container'
import "../styles/style.css";

const BlogLayout = ({data}) => {
    const { edges } = data.allMarkdownRemark
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>TGH | Blog</title>
        </Helmet>

        <NavigationBar />
        <BlogJumbotron />

        <div
          style={{
            marginLeft: "30px",
            marginRight: "30px",
            marginBottom: "30px",
          }}
        >

          <div style={{display: "flex", alignItems: "center"}}>
            <Container className="blogedge">
              <h4>All Posts</h4>
              <hr style={{width: "100%"}} />
            </Container>
          </div>

          {edges.map(edge => {
            const { frontmatter } = edge.node;
            return (
              <div key={Math.random()} style={{display: "flex", alignItems: "center"}}>
                <Container className="blogedge">
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
            );
          })}
        </div>
      </div>
    );
}

export const query = graphql`
         query BlogQuery {
           allMarkdownRemark(
             sort: { order: DESC, fields: [frontmatter___sortDate] }
           ) {
             edges {
               node {
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
       `;

export default BlogLayout
