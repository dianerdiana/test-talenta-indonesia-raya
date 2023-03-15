// ** React Import
import React from 'react'

// ** Layout Component
import NavbarComponent from './components/NavbarComponent'

// ** Dynamic Navigation Menu
import { navigations } from '../navigation'

// ** Routing
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <NavbarComponent navigations={navigations} />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
