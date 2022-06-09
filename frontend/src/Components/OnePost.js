import React from "react";
import { useNavigate } from "react-router-dom";

function OnePost({ post }) {
  const navigate = useNavigate();
  

  let newDate = new Date(post.date);

  
  return (
    
    <div className="post-and-heart">
      <div className="one-post">
        {post ? (
          <>
            <img className="profile-image" src={post.author.picture} alt="profile" />
            <div className="post-info">
              {
                <p>
                  User's name:{" "}
                  {post.author ? post.author.userName : "no username"}
                </p>
              }
              {
                <p>
                  Phone number:{" "}
                  {post.author.phoneNumber ? post.author.phoneNumber : ""}
                </p>
              }
              <p>City: {post.author.location}</p>
              <p>
                Category: {post.subcategory.name ? post.subcategory.name : ""}
              </p>
              <p>Date: {newDate.toLocaleString()}</p>
            </div>
            <div className="post-description">
              <p>{post.body}</p>
            </div>
          </>
        ) : (
          "nope"
        )}
      </div>
      <div>
        <img
          /* <Link to="/protected/answer">
           img 
        </Link>    
        */
          onClick={() => navigate("/protected/answer")}
          className="hearts"
          src={"Images/heart.gif"}
          alt=""
        />
      </div>
    </div>
  );
}

export default OnePost;
