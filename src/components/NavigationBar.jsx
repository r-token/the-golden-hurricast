import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavigationBar = () => {
  return (
    <div style={{ marginBottom: '75px' }}>
      <Navbar fixed='top' collapseOnSelect expand='md' bg='dark' variant='dark' style={{ padding: '10px' }}>
        <Navbar.Brand href='/'>
          <picture>
            <source type='image/webp' srcSet='/logo-navbar-white.png' style={{ marginRight: 15, height: '48px', width: '50px' }} />
            <img src='/logo-navbar-white.png' alt='The Golden Hurricast logo' style={{ marginRight: 15, height: '48px', width: '50px' }} />
          </picture>
          The Golden Hurricast
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav' style={{ marginLeft: '17px' }}>
          <Nav className='ms-auto'>
            <Nav.Link href='../podcast'>Podcast</Nav.Link>
            <Nav.Link href='https://patreon.com/thegoldenhurricast'>Patreon</Nav.Link>
            <Nav.Link href='../merch'>Merch</Nav.Link>
            <Nav.Link href='../about'>About</Nav.Link>
            <Nav.Link href='../support'>Support</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar