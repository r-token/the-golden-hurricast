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

          <br />
          <h5> All Posts </h5>

          <hr />
          {edges.map(edge => {
            const { frontmatter } = edge.node;
            return (
              <div key={frontmatter.path} style={{ marginBottom: "1rem" }}>
                <Link
                  style={{
                    fontSize: "18px"
                  }}
                  to={frontmatter.path}
                >
                  {frontmatter.title} — {frontmatter.date}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export const query = graphql`
         query HomepageQuery {
           allMarkdownRemark(
             sort: { order: DESC, fields: [frontmatter___date] }
           ) {
             edges {
               node {
                 frontmatter {
                   title
                   path
                   date
                 }
               }
             }
           }
         }
       `;

export default BlogLayout
