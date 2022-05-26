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
        <img src="/Images/Logo-blue.png" alt="logo.png"></img>
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
                color: isActive ? "white" : "white",
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "white" : "white",
              })}
            >
              About
            </NavLink>
            <NavLink
              to="/signin"
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "white" : "white",
              })}
            >
              Sign in
            </NavLink>
            <NavLink
              to="/signup"
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "white" : "white",
              })}
            >
              Sign up
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/protected/profile"
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "white" : "white",
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
