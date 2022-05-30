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
        <input
          required
          className="search-bar"
          type="text"
          placeholder="Search.."
        ></input>
        <button type="submit" className="search-button" value="SUBMIT">
          SEARCH
        </button>
      </div>
      <div className="search-results">njjj</div>
    </>
  );
}

export default AllPosts;
