import React from 'react'

export default function GetCompany() {
  return (
    <>
      <div>PULL USER DATA FROM DB</div>
      <div className="offer">
        <form>
          <textarea placeholder="Write something about yourself and get in touch!">
            
          </textarea>
          <button className="get-btn">Submit</button>
        </form>
      </div>
    </>
  );
}
