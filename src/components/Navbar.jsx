import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className='nav-links'>
        <li>
          <a href="/contact">Contacts</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a className='active' href="/works">Works</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;