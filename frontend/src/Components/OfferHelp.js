import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";






function OfferHelp() {
  return (
    <>
      <div>PULL USER DATA FROM DB</div>
      <div className="offer">
        <form>
          <textarea placeholder="Write something about yourself and get in touch!">
            
          </textarea>
          <button className="offer-btn">Send message</button>
        </form>
      </div>
    </>
  );
}

export default OfferHelp;
