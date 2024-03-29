import React from 'react'
import Container from 'react-bootstrap/Container'

const SupportJumbotron = () => {
    return (
      <div className='jumbotron'>
          <Container className='container_style'>
            <h1>Support Us</h1>
            <p style={{ fontSize: '18px' }}>
                We do all of this for free (and ad-free) because we love TU athletics. If you
                have the means to do so, there are several ways you can support the podcast and
                the blog.
            </p>
          </Container>
      </div>
    )
}

export default SupportJumbotron