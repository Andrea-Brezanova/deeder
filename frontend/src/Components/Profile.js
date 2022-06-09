import axios from "axios";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Profile() {
  const user = useSelector((state) => {
    return state.auth.user;
  });

  const [info, setInfo] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${user.id}`)
      .then((res) => {
        setInfo(res.data);
        console.log("info", info)
      })
      .catch((err) => {
        console.error(err);
      });
  }, [user.id]);

  return (
    <>
      <div className="what-to-do">
        <div className="action">
          <p>Welcome {user.userName}!</p>
          <p className="today">What would you like to do today?</p>
        </div>
        <div className="main-body action-container">
          <NavLink className="offer-help" to="/posts">
            <div>Offer help</div>
          </NavLink>

          <NavLink className="get-help" to="/protected/get-help">
            <div>Ask for help</div>
          </NavLink>

          <NavLink className="offer-company" to="/posts">
            <div>Offer company</div>
          </NavLink>

          <NavLink className="get-company" to="/protected/get-company">
            <div>Ask for company</div>
          </NavLink>
        </div>
      </div>
      <div className="profile-container">
        <img
          className="profile-image2"
          src={info && info.picture ? info.picture : "No profile picture"}
          alt="profile"
        ></img>

        <div className="profile-info">
          <p>Name: {info && info.userName ? info.userName : "No username"}</p>
          <p>Location: {info && info.location ? info.location : "No location"}</p>
          <p>Phone Number: {info && info.phoneNumber ? info.phoneNumber : "No phone number"}</p>
          <p>Email: {info && info.email}</p>
          <p>Password: {info && info.password}</p>
        </div>
      </div>
    </>
  );
}

export default Profile;
