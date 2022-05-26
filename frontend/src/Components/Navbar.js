import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/reducers/auth";

export default function Navbar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="nav">
      <NavLink to="/" className="logo" style={({ isActive }) => ({ color: isActive ? "white" : "white"})}>Logo</NavLink>
      <NavLink to="/" className="app-name" style={({ isActive }) => ({ color: isActive ? "white" : "white"})}>Deeder</NavLink>
      <div class-name="nav-items">
      <NavLink to="/protected/profile" style={({ isActive }) => ({ color: isActive ? "white" : "white"})}>Profile</NavLink>
        {!isAuthenticated ? (
          <>
            <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "white" : "white"})}>Home</NavLink>
            <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "white" : "white"})}>About</NavLink>
            <NavLink to="/signin" style={({ isActive }) => ({ color: isActive ? "white" : "white"})}>Sign in</NavLink>
            <NavLink to="/signup" style={({ isActive }) => ({ color: isActive ? "white" : "white"})}>Sign up</NavLink>
          </>
        ) : (
          <NavLink to="/" onClick={()=>{
            localStorage.removeItem("token");
            dispatch(logout());
          }}>Log out</NavLink>
        )}
      </div>
    </div>
  );
}
