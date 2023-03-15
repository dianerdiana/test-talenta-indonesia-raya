// ** Third Party Component
import { NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const DropdownMenu = ({ nav }, props) => {
  return (
    <NavDropdown title={nav.title} {...props}>
      {nav.children.map((child, index) => {
        return (
          <NavDropdown.Item as={NavLink} to={child.path} key={index}>
            {child.title}
          </NavDropdown.Item>
        )
      })}
    </NavDropdown>
  )
}

export default DropdownMenu
