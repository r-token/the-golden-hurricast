import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Link } from 'gatsby'

const BlogHeroUnit = () => {
    return (
      <div>
        <Jumbotron>
          <h1>Blog</h1>
          <p style={{ fontSize: "18px" }}>
            A blog with which we hope to dive deeper into stats, explore TU history, and more.
          </p>

          You can <Link to="/tags">browse posts by tag</Link>, or view all of our posts below.
        </Jumbotron>
      </div>
    );
}

export default BlogHeroUnit;