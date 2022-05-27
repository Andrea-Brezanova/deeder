import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Navigate, useNavigate, NavLink } from "react-router-dom";

function Profile() {

  const user = useSelector((state) => {
    return state.auth.user;
  });

  console.log("user", user.id)

  
  useEffect(() => {
    
    axios.get(`http://localhost:3000/users/${user.id}`).then((res)=> {
      console.log(res)
    }).catch((err)=> {
      console.log(err)
    })
}, []);

  

  return (
  <>
  <div className="action">
  <div>Welcome: {user.userName}</div>
        <p>What would you like to do today?</p>
      </div>
      <div className="main-body">
        <NavLink className="offer-help" to="/protected/offer-help">
          <div>OFFER HELP</div>
        </NavLink>

        <NavLink className="get-help" to="/protected/get-help">
          <div>GET HELP</div>
        </NavLink>

        <NavLink className="offer-company" to="/protected/offer-company">
          <div>OFFER COMPANY</div>
        </NavLink>

        <NavLink className="get-company" to="/protected/get-company">
          <div>GET COMPANY</div>
        </NavLink>
      </div>
  
  </>
  )
}

export default Profile;
