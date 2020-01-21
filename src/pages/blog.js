import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from 'gatsby'
import NavigationBar from '../components/NavigationBar'
import BlogHeroUnit from '../components/BlogHeroUnit'
import "../styles/style.css";

const BlogLayout = ({data}) => {
    const { edges } = data.allMarkdownRemark
    return (
      <div>
        <NavigationBar />
        <BlogHeroUnit />
        <div
          style={{
            marginLeft: "30px",
            marginRight: "30px",
            marginBottom: "30px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Helmet>
            <meta charSet="utf-8" />
            <title>TGH | Blog</title>
          </Helmet>

          <h5> All Posts </h5>

          <hr />
          {edges.map(edge => {
            const { frontmatter } = edge.node;
            return (
              <Link
                style={{
                  textDecoration: "none"
                }}
                to={frontmatter.path}
              >
                <div
                  key={frontmatter.path}
                  id="blogedge"
                  style={{
                    marginBottom: "1rem",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderColor: "lightgrey",
                    borderRadius: "5px",
                    padding: "5px"
                  }}
                >
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginBottom: "0px"
                    }}
                  >
                    {frontmatter.title}
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "grey",
                      marginBottom: "0px",
                      paddingTop: "10px"
                    }}
                  >
                    {frontmatter.date}
                    <br />
                    {frontmatter.excerpt}
                  </p>
                </div>
              </Link>
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
