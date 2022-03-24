import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function BodyHeader() {
  return (
    <>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="home/item1">Item1</Nav.Link>
        <Nav.Link as={Link} to="home/item2">Item2</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}
