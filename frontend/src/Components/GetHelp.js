import {useState, useEffect} from 'react';
import jwt_decode from "jwt-decode";

export default function GetHelp() {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  // const token = localStorage.token;
  // const decoded = jwt_decode(token);
  // console.log(decoded);


const redirect = ()=> {
  

}
  return (
    <>
      <div>PULL USER DATA FROM DB</div>
      <div className="offer">
        <form>
          <textarea placeholder="Write something about yourself and get in touch!" value={body} onChange={(e)=> setBody(e.target.value)}>     
          </textarea>
          <button className="get-btn" onClick={redirect}>Submit</button>
        </form>
      </div>
    </>
  );
}
