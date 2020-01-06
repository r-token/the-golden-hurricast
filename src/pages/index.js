import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from 'gatsby'
import NavigationBar from '../components/NavigationBar'
import HeroUnit from '../components/HeroUnit'

const Layout = ({data}) => {
    const { edges } = data.allMarkdownRemark
    return (
      <div>
        <NavigationBar />
        <HeroUnit />
        <div
          style={{
            marginLeft: "30px",
            marginRight: "30px",
            marginBottom: "30px",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Helvetica Neue"
          }}
        >
          <Helmet>
            <meta charSet="utf-8" />
            <title>The Golden Hurricast</title>
          </Helmet>

          <h2>Blog</h2>
          <br />
          <p>
            Affectionately known as Herc's Corner, our blog is named after TU's
            former mascot Herc the Hurricane. Our goal with this blog is to dive
            deeper into stats, explore TU history, and write about interesting
            milestones as Tulsa athletics continues to progress.
          </p>
          <p>
            You can <Link to="/tags">browse posts by tag</Link>, or view all
            of our posts below.
          </p>

          <br />
          <h5> All Posts </h5>

          <hr />
          {edges.map(edge => {
            const { frontmatter } = edge.node;
            return (
              <div key={frontmatter.path} style={{ marginBottom: "1rem" }}>
                <Link
                  style={{
                    fontFamily: "Helvetica Neue",
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

export default Layout
