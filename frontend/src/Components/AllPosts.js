import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../Components/SearchBar";
import OnePost from "../Components/OnePost";

function AllPosts() {
  useEffect(() => {
    getPosts();
  }, []);

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/posts`,
        {
          headers: { authorization: `bearer ${localStorage.getItem("token")}` },
        }
      );
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(posts);
  return (
    <div>
      <div className="all-posts">
        <SearchBar />
      </div>
      <div className="result-container" key={post._id}>
        {posts &&
          posts.map((element) => {
            return (
              <OnePost post={element} />

              // <div className="map-result" key={post._id}>
              //   <p>{post.author.userName}</p>
              //   <p>{post.body}</p>
              //   <p>{post.date}</p>
              // {/* <p>{post.subcategory.name && post.subcategory.name}</p> */}
            );
          })}
      </div>
    </div>
  );
}

export default AllPosts;
