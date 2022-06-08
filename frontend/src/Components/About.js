import React from "react";
import FunctionClick from "./FunctionClick";

export default function About() {
  return (
    <>
      <div>
        <div className="how-it-works">
          {/* <p>Become a member by opening an account.</p>
          <button>Click here</button>
          <p>See all posts and answer someone!</p>
          <p>If you need help, fill out the form and accept calls</p>
           */}
        </div>
        <div className="grid-container">
          <div className="try">
            <div className="img-container">
              <img
                className="card-img-top"
                src="./Images/bees.png"
                alt="Bees"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Become a member</h5> <br />
              <br />
              <br />
              <p className="card-text">The more the merrier! </p>
            </div>
          </div>

          <div className="try">
            <div className="img-container">
              <img
                className="card-img-top"
                src="../Images/looking.jpg"
                alt="Looking"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">See who's here</h5> <br />
              <p className="card-text">
                <br />
                Browse the posts created by other users. <br /> Choose who you'd
                like to help or with whom you'd like to meet.
                <br />{" "}
              </p>
            </div>
          </div>

          <div className="try">
            <div className="img-container">
              <img
                className="card-img-top"
                src="./Images/elderly.jpg"
                alt="elderly"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Decide on your next move</h5> <br />
              <p className="card-text">
                <br />
                Remember, one good deed here and there could make a big
                difference in someone's day.
              </p>
            </div>
          </div>

          <div className="try">
            <div className="img-container">
              <img
                className="card-img-top"
                src="./Images/painting.png"
                alt="Painting"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Reach out</h5> <br />
              <p className="card-text">
                Don't be shy, this is not a dating site. <br /> <br />
                Just your local peeps looking forward to spending time together
                while doing something useful or fun.
              </p>
            </div>
          </div>

          <div className="try">
            <div className="img-container">
              <img
                className="card-img-top"
                src="./Images/help-wanted.jpg"
                alt="Help"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Need help with a project?</h5> <br />
              <p className="card-text">
                You can ask for help too! <br />
                <br /> Sign up and post your request! <br />
                Then wait. <br />
              </p>
            </div>
          </div>

          <div className="try">
            <div className="img-container">
              <img
                className="card-img-top"
                src="./Images/chatting.jpg"
                alt="Chatting"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Wanna make friends?</h5> <br />
              <br />
              <p className="card-text">
                Suggest some activity you like and someone will surely join you
                soon!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="action">
          <p>Ready to get out there?</p>
        </div>
        <FunctionClick />
      </div>
    </>
  );
}
