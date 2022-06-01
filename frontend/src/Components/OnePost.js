import React from 'react'

function OnePost({post}) {
  return (
   <div className="one-post">
   <p>{post.author.userName}</p>
    <p>{post.body}</p>
    <p>{post.date}</p>
    <p>{post.subcategory.name && post.subcategory.name}</p> 
    </div>
  );
}

export default OnePost;
