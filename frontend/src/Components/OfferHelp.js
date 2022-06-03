import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";






function OfferHelp() {
  return (
    <>
      <div></div>
      <div className="offer">
        <form>
          <textarea placeholder="Write something about yourself or what you have in mind!">
            
          </textarea>
          <button className="offer-btn">Send message</button>
        </form>
      </div>
    </>
  );
}

export default OfferHelp;
