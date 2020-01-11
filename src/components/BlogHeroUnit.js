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
            Affectionately known as Herc's Corner, our blog is named after TU's
            former mascot Herc the Hurricane. Our goal with this blog is to dive
            deeper into stats, explore TU history, and write about interesting
            milestones as Tulsa athletics continues to progress.
          </p>

          You can <Link to="/tags">browse posts by tag</Link>, or view all of
            our posts below.
        </Jumbotron>
      </div>
    );
}

export default BlogHeroUnit;