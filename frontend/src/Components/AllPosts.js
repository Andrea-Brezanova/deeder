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
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState([]);
  

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/posts`,
        {
          headers: { authorization: `bearer ${localStorage.getItem("token")}` },
        }
      );
      setPosts(response.data);
      setFiltered(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(posts);
  return (
    <div>
      <div className="all-posts">
        {/* <Checkboxes /> */}
      </div>
      <div className="filter">
        <Filter posts={posts} setFiltered={setFiltered} category={setCategory} setCategory={setCategory}/>
      </div>
      <div className="result-container" >
        {posts &&
          posts.map((post) => {
            return (
              <OnePost post={post} key={post._id}/>
            );
          })}
      </div>
    </div>
  );
}

export default AllPosts;
