import React from "react";

function OnePost({ post }) {
  let newDate = new Date(post.date);
  console.log("new date", newDate);
  return (
    <div className="post-and-heart">
      <div className="one-post">
        {post ? (
          <>
            <div className="post-info">
            <p>
              Category: {post.subcategory.name ? post.subcategory.name : ""}
            </p>
            {
              <p>
                User's name:{" "}
                {post.author ? post.author.userName : "no username"}
              </p>
            }
            {
              <p>
                Phone number: {post.phoneNumber ? post.author.phoneNumber : ""}
              </p>
            }
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
        <img className="hearts" src={"Images/heart.gif"} alt="" />
      </div>
    </div>
  );
}

export default OnePost;
