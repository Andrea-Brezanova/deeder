import React from "react";

function OnePost({ post }) {
  return (
    <div className="post-and-heart">
      <div className="one-post">
        <div className="post-info">
          <p className="post-author">Name: {post.author.userName}</p>
          <p classname="post-date">Date: {post.date}</p>
          <p className="post-number">Phone number:{post.phoneNumber}</p>
          {/* <p className="post-subcategory">Subcageory: {post.subcategory.name ? post.subcategory.name : ""}</p>  */}
        </div>
        <p className="post-description">{post.body}</p>
      </div>
      <div>
        <img className="hearts" src={"./Images/heart.gif"} alt="" />
      </div>
    </div>
  );
}

export default OnePost;
