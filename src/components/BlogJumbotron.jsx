import React from "react"
import Container from 'react-bootstrap/Container'
import { Link } from 'gatsby'

const BlogJumbotron = () => {
    return (
      <div className="jumbotron">
          <Container className="container_style">
            <h1>Blog</h1>
            <p style={{ fontSize: "18px" }}>
              Herc's Corner. The Golden Hurriblog. Whatever you want to call it, we'll use this to dive deeper into stats, explore TU history, and more.
            </p>
    
            You can <Link to="/tags">browse posts by tag</Link>, or view all of our posts below.
          </Container>
      </div>
    );
}

export default BlogJumbotron;