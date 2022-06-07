import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import Checkboxes from "../Components/Checkboxes";
import OnePost from "../Components/OnePost";
import Filter from "../Components/Filter";

function AllPosts() {
  useEffect(() => {
    getPosts();
  }, []);

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("");
  // const [filtered, setFiltered] = useState([]);
  // const [activeCategory, setActiveCategory] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/posts`,
        {
          headers: { authorization: `bearer ${localStorage.getItem("token")}` },
        }
      );
      setPosts(response.data);
      // setFiltered(response.data);
      // setActiveCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("here", activeCategory);
  return (
    <div>
      <div className="filter">
        {/* <Filter
          posts={posts}
          setPosts={setPosts}
          // setFiltered={setFiltered}
          // activeCategory={activeCategory}
          // setActiveCategory={setActiveCategory}
        /> */}
        <select onChange={(e) => setFilter(e.target.value)}>
          {" "}
          <option value="">ALL POSTS</option>
          <option value="62879c849c20178ec23510ab">HELP</option>
          <option value="62879b5f9c20178ec23510a7">COMPANY</option>
          <option value="6297512199c7f554fede8195">OTHER</option>
        </select>
      </div>
      <div className="result-container">
        {posts && filter === ""
          ? posts.map((post) => <OnePost post={post} key={post._id} />)
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
