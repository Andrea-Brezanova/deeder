import React from 'react'

function OnePost({post}) {
  return (
   <div className="one-post">
   
    <p>{post.body}</p>
    <p>{post.author.userName}</p>
    <p>{post.date}</p>
    {/* <p>{post.subcategory.name ? post.subcategory.name : ""}</p>  */}
    <img className="hearts" src={'./Images/heart.gif'} alt="" />
    </div>
  );
}

export default OnePost;
