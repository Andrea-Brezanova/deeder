import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="nav">
        <div>Logo</div>
        <div class-name="nav-items">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/signin">Signin</Link>
            <Link to="/signup">Signup</Link>
        </div>
    </div>
  )
}
