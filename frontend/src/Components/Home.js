import React from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

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
          <p className="heading welcome-text-container">Welcome to Deeder</p>
          <p className="welcome-text">
            A place for helping others, meeting someone new and making friends
            all at the same time!
          </p>
        </div>
        <div className="helpers-img">
          <img src="/Images/helpers.png" />
        </div>
      </div>

      <div className="about-container">
        <img src="/Images/reach-out.png"></img>

        <div>
          <div className="welcome-text-container-right">
            <p className="heading">Made in your city ... for your city</p>
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
            <div className="img-container">
              <img
                className="card-img-top"
                src="./Images/bees.png"
                alt="Card image cap"
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
                alt="Card image cap"
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
                alt="Card image cap"
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
                alt="Card image cap"
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
                alt="Card image cap"
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
                alt="Card image cap"
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

{/* 
      <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
    </ol>
    <!-- Carousel items -->
    <div class="carousel-inner">
        <div class="active item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>
    <!-- Carousel nav -->
    <a class="carousel-control left" href="#carousel" data-slide="prev">&lsaquo;</a>
    <a class="carousel-control right" href="#carousel" data-slide="next">&rsaquo;</a>
</div> */}

      <div className="why-deeder">
        <div className="action">
          <p>Why Deeder?</p>
        </div>
        <div>
          <p>Super easy to use</p>
          <p>Connects young and old</p>
          <p>We verify our users so no need to worry</p>
        </div>
      </div>

      <div className="categories">
        <p className="browse">Browse the categories</p>
        <div className="container-sm">
          <div className="row pt-5 pb-5">
            <div className="col-md-3 col-sm-4 col-xs-6 p-2 ">
              <button
                onClick={() => navigate("/cleaning")}
                className="category-button"
              >
                Cleaning help
              </button>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 p-2">
              <button className="category-button">Delivery of goods</button>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 p-2">
              <button className="category-button">Shopping</button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">Handy person</button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">Assembly</button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">Painting</button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">Transport something</button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">Repairs</button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">Electrical</button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">Gardening help</button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">Packing and lifting</button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">Other house projects</button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">Make music together</button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">Go clubbing</button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">
                Cook a meal/Have a dinner
              </button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">Go to an event</button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">Do sports</button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">Go for a walk</button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">Go to a restaurant</button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">
                Hiking trip around Berlin
              </button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">Weekend camping</button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">Bike somewhere</button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">Just hang out outside</button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">
                Help with school stuff
              </button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">
                Help with a digital projects
              </button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">
                Help with a creative project
              </button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">Smoke some weed</button>
            </div>
            <div className="col-md-3 p-2">
              <button className="category-button">Some other activity</button>
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
