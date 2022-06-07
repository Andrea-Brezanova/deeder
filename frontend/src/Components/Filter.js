import { useEffect } from "react";

function Filter({
  // setActiveCategory,
  // activeCategory,
  // setFiltered,
  posts,
  setPosts,
}) {
  const ids = {
    help: "62879c849c20178ec23510ab",
    company: "62879b5f9c20178ec23510a7",
    other: "6297512199c7f554fede8195",
  };

  const handleFilter = (value) => {
    const allPosts = [...posts];
    setPosts(allPosts.filter((el) => el.subcategory.category === value));
    // console.log("filtered test", filtered);
  };

  console.log("filtered posts", posts);

  return (
    <div className="filter-container">
      <button
        className="filter-button"
        // onClick={() => setPosts(allPosts)}
      >
        All Posts
      </button>
      <button className="filter-button" onClick={() => handleFilter(ids.help)}>
        Help wanted
      </button>
      <button
        className="filter-button"
        onClick={() => handleFilter(ids.company)}
      >
        Company wanted
      </button>
      <button className="filter-button" onClick={() => handleFilter(ids.other)}>
        Other
      </button>
    </div>
  );
}

export default Filter;
