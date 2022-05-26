import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Home() {
  return (
    <div className="main-body">
      <a className="offer-help" href=".com">
        <div>OFFER-HELP</div>
      </a>
      <a className="get-help" href=".com">
        <div>GET-HELP</div>
      </a>

      <a className="offer-company" href=".com">
        <div>OFFER-COMPANY</div>
      </a>

      <a className="get-company" href=".com">
        <div>GET-COMPANY</div>
      </a>
    </div>
  );
}
