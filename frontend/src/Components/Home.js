import React from "react";
import { Navigate, useNavigate, NavLink } from "react-router-dom";

export default function Home() {
  return (
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
  );
}
