import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/reducers/auth";

export default function Navbar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="nav">
      <div>Logo</div>
      <div class-name="nav-items">
        {!isAuthenticated ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/signin">Sign in</Link>
            <Link to="/signup">Sign up</Link>
          </>
        ) : (
          <Link to="/" onClick={()=>{
            localStorage.removeItem("token");
            dispatch(logout());
          }}>Log out</Link>
        )}
      </div>
    </div>
  );
}
