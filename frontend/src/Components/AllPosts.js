import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/posts`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div>
        {posts.map((element) => {
          return <p key={element._id}> {element.title}</p>;
        })}
      </div>
      <div className="all-posts">
        All posts from database go here
        <input type="text" placeholder="Search.."></input>
      </div>
    </>
  );
}

export default AllPosts;
