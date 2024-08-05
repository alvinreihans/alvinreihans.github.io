import { NavLink } from "react-router-dom";

function Navbar({handleNavClick}) {
  return (
    <nav>
      <ul className='nav-links'>
        <li>
          <NavLink onClick={handleNavClick} to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink onClick={handleNavClick} to="/blogs">Blogs</NavLink>
        </li>
        <li>
          <NavLink onClick={handleNavClick} to="/works">Works</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;