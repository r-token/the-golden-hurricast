import React from "react";
import NavigationBar from "../components/NavigationBar";
import { Link } from "gatsby";

const SingleTagTemplate = ({ pageContext }) => {
    const { posts, tagName } = pageContext
  return (
    <div>
      <NavigationBar />
      <div
        style={{
          marginTop: "30px",
          marginLeft: "30px",
          marginRight: "30px",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial'"
        }}
      >
        <h2>Posts about {`${tagName}`}</h2>
        <br />
        <p>
          These are all of the posts we've ever written that relate to{" "}
          {`${tagName}`}:
        </p>

        <hr />

        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link
                  style={{
                    fontFamily: "Helvetica Neue",
                    fontSize: "18px"
                  }}
                  to={post.frontmatter.path}
                >
                  {post.frontmatter.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SingleTagTemplate;
