// ** Third Party Component
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'

const NavLinkMenu = ({ nav, isActive }, props) => {
  return (
    <NavLink
      to={nav.path}
      className={classnames('nav-link text-gray', {
        active: isActive(nav.path),
      })}
      {...props}
    >
      {nav.title}
    </NavLink>
  )
}

export default NavLinkMenu
