import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../Components/SearchBar";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  console.log(posts)
  const getPosts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/posts`, {headers: {authorization: `bearer ${localStorage.getItem("token")}`}}
      );
     setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(posts)
    getPosts();
  }, []);

  return (
    <>
      
      <div className="all-posts">
        
      <SearchBar />
        


        {/* <input
          required
          className="search-bar"
          type="text"
          placeholder="Choose a category.."
        ></input>
        <button type="submit" className="search-button" value="SUBMIT">
          Search
        </button> */}
      </div>
      <div className="search-results">
      <p>HEIGHT OF THIS CONTAINER IS AUTO</p>
        <div className="posts">
        {posts && posts.map((element) => {
          return <div className="map-result" key={element._id}>
            <p>{element.author.userName}</p>
            <p>{element.body}</p>
            <p>{element.date}</p>
            {/* <p>{element.subcategory.name}</p> */}
          </div>;
        })}
      </div>
        </div>
       
    </>
  );
}

export default AllPosts;
