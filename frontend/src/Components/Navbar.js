import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar1">
        <Link to="/">HOME</Link>
        <Link to="/allposts">All Posts</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/signin">SIGN IN</Link>
        <Link to="/signup">SIGN UP</Link>
    </nav>
  )
}
