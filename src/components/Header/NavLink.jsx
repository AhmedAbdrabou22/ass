import { NavLink } from "react-router-dom"

function NavLinks() {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
    <li className="p-3 nav-item ">
    <NavLink to={'/'}>Home</NavLink>
  </li>
  <li className="p-3 nav-item ">
    <NavLink to={'/About'}>About</NavLink>
  </li>
  <li className="p-3 nav-item ">
  <NavLink to={'/Services'}>Services</NavLink>
  </li>
  <li className="p-3 nav-item ">
    <NavLink to={'/Blogs'}>Blogs</NavLink>
    </li>
  <li className="p-3 nav-item ">
  <NavLink to={'/Contact'}>Contact Us</NavLink>
  </li>
    </ul>
      )
}

export default NavLinks