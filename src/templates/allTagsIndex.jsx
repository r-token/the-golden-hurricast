import React from "react"
import { Link } from 'gatsby'
import NavigationBar from "../components/NavigationBar";

const AllTagsTemplate = ({pageContext}) => {
    const { tags } = pageContext
    return (
      <div>
        <NavigationBar />
        <div
          style={{
            marginTop: "130px",
            marginLeft: "30px",
            marginRight: "30px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Tags</h2>
          <br />
          <p>
            Click on any of the tags below to see all the posts we've written
            about that category.
          </p>

          <hr />

          <ul>
            {tags.map((tagName, index) => {
              return (
                <li key={index}>
                  <Link style={{ textDecoration: "none" }} className="blog_title"
                    to={`${tagName}`}
                  >
                    {tagName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
}

export default AllTagsTemplate