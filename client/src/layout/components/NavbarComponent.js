// ** React import
import React from 'react'

// ** Third Party Component
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

// ** Menu Component
import NavLinkMenu from './menu/NavLinkMenu'
import DropdownMenu from './menu/DropdownMenu'
import { Menu } from 'react-feather'

const utility = {
  offcanvas: {
    id: 'offcanvasNavbar-expand-md',
  },
}

const NavbarComponent = ({ navigations }) => {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <Navbar bg="transparent" expand="md" className="p-4">
      <Container className="bg-secondary p-2 px-3 rounded-3 shadow">
        <Navbar.Brand as={Link} className="text-white">
          Dian Erdiana
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={utility.offcanvas.id} className="border-white shadow-none px-2">
          <Menu color="white" />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={utility.offcanvas.id}
          aria-labelledby={utility.offcanvas.id}
          placement="end"
          className="bg-secondary"
        >
          <Offcanvas.Header closeVariant="white" closeButton>
            <Offcanvas.Title id={utility.offcanvas.id} className="text-white">
              Dian Erdiana
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 gap-2 gap-md-4">
              {navigations.map((nav, index) => {
                if (nav.children?.length > 0) {
                  return <DropdownMenu nav={nav} key={index} id={nav.title + index} />
                }

                return <NavLinkMenu nav={nav} key={index} isActive={isActive} />
              })}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
