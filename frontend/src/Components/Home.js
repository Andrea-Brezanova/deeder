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
            <p className="heading">Made in your city ... for your city</p>
          </div>
          <div className="welcome-text-container">
            <p class="welcome-text">
              <p>In the mood for helping someone today?</p>
              <p>New in town and feeling lonely?</p>
              <p>Reach out and connect!</p>
              <p>There's always someone to hang out with!</p>
            </p>
          </div>
        </div>
      </div>
      <div>
        <p class="how-it-works">Here's how it works</p>
      </div>
      <div class="card-grid">
        <div class="card card-shadow">
          <div class="card-header card-image">
            <img src="/Images/bees.png"></img>
          </div>
          <div class="card-body"></div>
          Sign up and become a member. The more the merrier. Only by becoming a
          member can we all feel safe.
          <div class="card-footer"></div>
        </div>

        <div class="card card-shadow">
          <div class="card-header">
            <img src="/Images/looking.jpg"></img>
          </div>
          <div class="card-body"></div>
          See who is looking for help or company. Browse our list created from
          users' requests. Remember, one good deed here and there could make a
          big difference in someone's day.
          <div class="card-footer"></div>
        </div>

        <div class="card card-shadow">
          <div class="card-header">
            <img src="/Images/bicycle.jpg"></img>
          </div>
          <div class="card-body"></div>
          Choose who you'd like to help or with whom you'd like to meet.
          <div class="card-footer"></div>
        </div>

        <div class="card card-shadow">
          <div class="card-header">
            <img src="/Images/yes-i-can.gif"></img>
          </div>
          <div class="card-body"></div>
          Reach out. Don't be shy, this is not a dating site. Just your local
          peeps looking forward to spending time together while doing something
          useful or fun.
          <div class="card-footer"></div>
        </div>

        <div class="card card-shadow">
          <div class="card-header">
            <img src="/Images/painting.png"></img>
          </div>
          <div class="card-body"></div>
          Need help with something? You can ask for help too! Just sign up and
          post your request! Then wait and be sure to have cookies at home ready
          for your guest (really cool helper!)
          <div class="card-footer"></div>
        </div>

        <div class="card card-shadow">
          <div class="card-header">
            <img src="/Images/chatting.jpg"></img>
          </div>
          <div class="card-body"></div>
          Feeling lonely or wanna make a friend? Suggest some activity you like
          and someone will surely join you soon!
          <div class="card-footer"></div>
        </div>
      </div>
      
      <div className="action">
        <p>Ready to get out there?</p>
      </div>
      <div className="action-container">
      <div className="main-body action-container">
        <NavLink className="offer-help" to="/protected/offer-help">
          <div>Yes I want to help!</div>
        </NavLink>
        <NavLink className="offer-help" to="/protected/get-help">
          <div>Uhhh I'd love to hang out</div>
        </NavLink>
      </div>
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
