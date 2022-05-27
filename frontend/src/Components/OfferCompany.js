import React from 'react'

export default function OfferCompany() {
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
