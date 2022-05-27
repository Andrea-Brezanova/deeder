import React from "react";
import { Navigate, useNavigate, NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="hero">
        <p>Where good deeds and friendships happen</p>
      </div>
      <div className="about">
        <img
          className="helpers"
          src="/Images/helpers.png"
          alt="helpers"
          href="/"
        ></img>
        <p>
          Welcome to Deeder! <br /> <br />A place for helping others, meeting
          someone new and making friends all at the same time!
        </p>
      </div>
      <div className="action">
        <p>What would you like to do today?</p>
      </div>
      <div className="main-body">
        <NavLink className="offer-help" to="/protected/offer-help">
          <div>Help somebody</div>
        </NavLink>
        <NavLink className="offer-help" to="/protected/get-help">
          <div>Meet somebody</div>
        </NavLink>
      </div>
      <div className="app-icons">
        <p>Download the app, post your request and start making friends!</p>
        <a href="www.google.com">
          <img className="google" src="/Images/google-play-badge.png"></img>
        </a>
      </div>
    </>
  );
}
