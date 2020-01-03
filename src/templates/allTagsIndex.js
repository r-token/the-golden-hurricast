import React from "react"
import { graphql, Link } from 'gatsby'
import NavigationBar from "../components/NavigationBar";

const AllTagsTemplate = ({data, pageContext}) => {
    const { tags } = pageContext
    return (
      <div>
        <NavigationBar />
        <div style={{ fontFamily: "avenir" }}>
          <ul>
            {tags.map((tagName, index) => {
              return (
                <li key={index}>
                  <Link to={`tags/${tagName}`}>{tagName}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
}

export default AllTagsTemplate