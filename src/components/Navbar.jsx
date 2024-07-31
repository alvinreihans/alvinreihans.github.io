import React from 'react';
import { Link  } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className='nav-links'>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;