import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/reducers/auth";

export default function Navbar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="nav">
      <div className="logo">
        <img src="/Images/Logo-blue.png" alt="logo.png" href="/"></img>
        <NavLink
          to="/"
          className="deeder"
          style={({ isActive }) => ({ color: isActive ? "white" : "white" })}
        >
          Deeder
        </NavLink>
      </div>
      <div className="nav-items">
        {!isAuthenticated ? (
          <>
            <NavLink
              to="/"
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
              })}
            >
              How it works
            </NavLink>
            <NavLink
              to="/posts"
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
              })}
            >
              All Posts
            </NavLink>
            <NavLink
              to="/signin"
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
              })}
            >
              Sign in
            </NavLink>
            <NavLink
              to="/signup"
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
              })}
            >
              Sign up
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/"
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
              })}
            >
              How it works
            </NavLink>
            <NavLink
              to="/posts"
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
              })}
            >
              All Posts
            </NavLink>
            <NavLink
              to="/protected/profile"
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
              })}
            >
              Profile
            </NavLink>

            <NavLink
              to="/"
              className="nav-link"
              onClick={() => {
                localStorage.removeItem("token");
                dispatch(logout());
              }}
              style={({ isActive }) => ({
                color: isActive ? "white" : "white",
              })}
            >
              Log out
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
