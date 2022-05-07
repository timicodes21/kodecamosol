import React from 'react'
import { Container, Navbar, Nav, Image } from 'react-bootstrap'
import { GiHamburgerMenu } from 'react-icons/gi';
import Brand from '../assets/brand.png'
import { Link } from 'react-router-dom';

const NavigBar = () => {
  return (
    <div className="border-bottom">
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
        <Container>
            <Navbar.Brand href=""><h3 className="text-dark font-28 font-700">TradeEasy</h3></Navbar.Brand>
            <Navbar.Toggle className="bg-dark text-white" aria-controls="responsive-navbar-nav"><GiHamburgerMenu /></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
            <Nav className="pt-md-2 pb-md-1">
                <Nav.Link>
                  <Link to="/"><p className="font-13 text-black roboto p-md-2 font-700">HOME</p></Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about"><p className="font-13 text-black roboto p-md-2 font-700">ABOUT</p></Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contactus"><p className="font-13 text-black roboto p-md-2 font-700">CONTACT US</p></Link>
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigBar