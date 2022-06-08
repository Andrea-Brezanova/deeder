import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import OnePost from "../Components/OnePost";

function AllPosts() {
  useEffect(() => {
    getPosts();
  }, []);

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("");

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

  return (
    <div>
      <div className="filter"></div>
      <div className="result-container">
        <p className="select-category">Select category:</p>
        <select
          className="filter-list"
          onChange={(e) => setFilter(e.target.value)}
        >
          {" "}
          <option value="">ALL POSTS</option>
          <option value="62879c849c20178ec23510ab">HELP</option>
          <option value="62879b5f9c20178ec23510a7">COMPANY</option>
          <option value="6297512199c7f554fede8195">OTHER</option>
        </select>
        {posts && filter === ""
          ? posts.map((post) => {
              return <OnePost post={post} key={post._id} />;
            })
          : posts
              .filter((el) => el.subcategory.category === filter)
              .map((post) => {
                return <OnePost post={post} key={post._id} />;
              })}
      </div>
    </div>
  );
}

export default AllPosts;
