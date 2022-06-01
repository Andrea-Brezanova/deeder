import React from "react";
import { Navigate, useNavigate, NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="slogan">
          <p>Where good deeds and friendships happen</p>
          <h5>Volunteering made easy</h5>
        </div>
      </div>

      <div className="about-container">
        <div>
          <div className="welcome-text-container">
            <p className="heading">Welcome to Deeder</p>
          </div>
          <div>
            <p className="welcome-text">
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
          <div className="welcome-text-container-right">
            <div className="welcome-text">
              <p>In the mood for helping someone today?</p>
              <p>New in town and feeling lonely?</p>
              <p>Reach out and connect!</p>
              <p>There's always someone to hang out with!</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="how-it-works">
          <p>Here's how it works</p>
        </div>
        <div className="grid-container">
          <div className="try">
            <img
              className="card-img-top"
              src="./Images/bees.png"
              alt="Card image cap"
            />

            <div className="card-body">
              <h5 className="card-title">Become a member</h5> <br /><br/><br/>
              <p className="card-text">The more the merrier! </p>
            </div>
          </div>

          <div className="try">
            <img
              className="card-img-top"
              src="../Images/looking.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">See who's here</h5> <br />
              <p className="card-text"><br/>
                Browse the posts created by other users. <br /> Choose who you'd
                like to help or with whom you'd like to meet.
                <br />{" "}
              </p>
            </div>
          </div>

          <div className="try">
            <img
              className="card-img-top"
              src="./Images/elderly.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Decide on your next move</h5> <br />
              <p className="card-text"><br/>
                Remember, one good deed here and there could make a big
                difference in someone's day.
              </p>
            </div>
          </div>

          <div className="try">
            <img
              className="card-img-top"
              src="./Images/painting.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Reach out</h5> <br />
              <p className="card-text">
                Don't be shy, this is not a dating site. <br/> <br/>Just your local peeps
                looking forward to spending time together while doing something
                useful or fun.
              </p>
            </div>
          </div>

          <div className="try">
            <img
              className="card-img-top"
              src="./Images/help-wanted.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Need help with a project?</h5> <br />
              <p className="card-text">
                You can ask for help too! <br/><br/> Sign up and post your request! <br />
                Then wait. <br/> 
              </p>
            </div>
          </div>

          <div className="try">
            <img
              className="card-img-top"
              src="./Images/chatting.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Wanna make friends?</h5> <br/><br />
              <p className="card-text">
                Suggest some activity you
                like and someone will surely join you soon!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="action">
        <p>Ready to get out there?</p>
      </div>
      <div className="action-container">
        <div className="main-body action-container">
          <NavLink className="offer-help" to="/posts">
            <div>Yes I want to help!</div>
          </NavLink>
          <NavLink className="offer-help" to="/posts">
            <div>I'd love to hang out</div>
          </NavLink>
        </div>
      </div>
      <div className="categories">
        <p className="browse">Browse the categories</p>
        <div className="container-sm">
          <div className="row pt-5 pb-5">
            <div className="col-md-3 p-2">
              <img
                className="img-fluid"
                src="./Images/helpers.png"
                alt="placeholder"
              />
            </div>
            <div className="col-md-3 p-2">
              <img
                className="img-fluid"
                src="./Images/helpers.png"
                alt="placeholder"
              />
            </div>
            <div className="col-md-3 p-2">
              <img
                className="img-fluid"
                src="./Images/helpers.png"
                alt="placeholder"
              />
            </div>
            <div className="col-md-3 p-2">
              <img
                className="img-fluid"
                src="./Images/helpers.png"
                alt="placeholder"
              />
            </div>
            <div className="col-md-3 p-2">
              <img
                className="img-fluid"
                src="./Images/helpers.png"
                alt="placeholder"
              />
            </div>
            <div className="col-md-3 p-2">
              <img
                className="img-fluid"
                src="./Images/helpers.png"
                alt="placeholder"
              />
            </div>
            <div className="col-md-3 p-2">
              <img
                className="img-fluid"
                src="./Images/helpers.png"
                alt="placeholder"
              />
            </div>
            <div className="col-md-3 p-2">
              <img
                className="img-fluid"
                src="./Images/helpers.png"
                alt="placeholder"
              />
            </div>
            <div className="col-md-3 p-2">
              <img
                className="img-fluid"
                src="./Images/helpers.png"
                alt="placeholder"
              />
            </div>
            <div className="col-md-3 p-2">
              <img
                className="img-fluid"
                src="./Images/helpers.png"
                alt="placeholder"
              />
            </div>
            <div className="col-md-3 p-2">
              <img
                className="img-fluid"
                src="./Images/helpers.png"
                alt="placeholder"
              />
            </div>
            <div className="col-md-3 p-2">
              <img
                className="img-fluid"
                src="./Images/helpers.png"
                alt="placeholder"
              />
            </div>
            <div className="col-md-3 p-2">
              <img
                className="img-fluid"
                src="./Images/helpers.png"
                alt="placeholder"
              />
            </div>
            <div className="col-md-3 p-2">
              <img
                className="img-fluid"
                src="./Images/helpers.png"
                alt="placeholder"
              />
            </div>
            <div className="col-md-3 p-2">
              <img
                className="img-fluid"
                src="./Images/helpers.png"
                alt="placeholder"
              />
            </div>
            <div className="col-md-3 p-2">
              <img
                className="img-fluid"
                src="./Images/helpers.png"
                alt="placeholder"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="app-icons">
        <p>Download the App:</p>
        <a href="www.google.com">
          <img className="google" src="/Images/google-play-badge.png"></img>
        </a>
      </div>
    </>
  );
}
