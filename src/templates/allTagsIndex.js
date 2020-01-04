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
            marginTop: "30px",
            marginLeft: "30px",
            marginRight: "30px",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Helvetica Neue"
          }}
        >

          <h2>Tags</h2>
          <br />
          <p>
            Click on any of the tags below to see all the posts we've written about
            that category.
          </p>

          <hr />

          <ul>
            {tags.map((tagName, index) => {
              return (
                <li key={index}>
                  <Link
                    style={{
                      fontFamily: "Helvetica Neue",
                      fontSize: "18px"
                    }} to={`tags/${tagName}`}
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