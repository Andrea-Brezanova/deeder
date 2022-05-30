import React from "react";
import { Navigate, useNavigate, NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="slogan">
          <p>Where good deeds and friendships happen</p>
        </div>
      </div>
      <div className="about-container">
        <div>
          <div>
            <p className="heading">Welcome to Deeder</p>
          </div>
          <div className="welcome-text-container">
            <p class="welcome-text">
              A place for helping others, meeting someone new and making friends
              all at the same time!
            </p>
          </div>
        </div>
        <div className="helpers-img">
          <img src="/Images/helpers.png"></img>
        </div>
      </div>
      <div className="about-container">
        
        <div className="reach-out-img">
          <img src="/Images/reach-out.png"></img>
        </div>
        <div>
          <div>
            <p className="heading">Welcome to Deeder</p>
          </div>
          <div className="welcome-text-container">
            <p class="welcome-text">
              A place for helping others, meeting someone new and making friends
              all at the same time!
            </p>
          </div>
        </div>
        
      </div>
      <div>
        <p class="how-it-works">How it works</p>
      </div>
      <div class="card-grid">
        <div class="card card-shadow">
          <div class="card-header card-image">
            <img src="/Images/bees.png"></img>
          </div>
          <div class="card-body"></div>
          Short text inside the card
          <div class="card-footer"></div>
          <button class="card-button">Details</button>
        </div>

        <div class="card card-shadow">
          <div class="card-header">Picture goes here</div>
          <div class="card-body"></div>
          Short text inside the card
          <div class="card-footer"></div>
          <button class="card-button">Details</button>
        </div>

        <div class="card card-shadow">
          <div class="card-header">Picture goes here</div>
          <div class="card-body"></div>
          Short text inside the card
          <div class="card-footer"></div>
          <button class="card-button">Details</button>
        </div>

        <div class="card card-shadow">
          <div class="card-header">Picture goes here</div>
          <div class="card-body"></div>
          Short text inside the card
          <div class="card-footer"></div>
          <button class="card-button">Details</button>
        </div>

        <div class="card card-shadow">
          <div class="card-header">Picture goes here</div>
          <div class="card-body"></div>
          Short text inside the card
          <div class="card-footer"></div>
          <button class="card-button">Details</button>
        </div>

        <div class="card card-shadow">
          <div class="card-header">Picture goes here</div>
          <div class="card-body"></div>
          Short text inside the card
          <div class="card-footer"></div>
          <button class="card-button">Details</button>
        </div>
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
