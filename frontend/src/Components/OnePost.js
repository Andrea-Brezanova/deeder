import React from "react";

function OnePost({ post }) {

  let newDate = new Date(post.date);
  console.log("new date", newDate);
  return (
    <div className="one-post">
      {post ? (
        // post.author
        <>
          <p>{post.body}</p>
          {<p>{post.author ? post.author.userName : "no username"}</p>}
          <p>{newDate.toLocaleString()}</p>
          <p>{post.subcategory.name ? post.subcategory.name : ""}</p>
          <img className="hearts" src={"./Images/heart.gif"} alt="" />
        </>
      ) : (
        "nope"
      )}

    </div>
  );
}

export default OnePost;
