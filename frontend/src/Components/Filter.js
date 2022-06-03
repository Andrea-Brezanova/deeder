import { useEffect } from 'react'

function Filter({setActiveCategory, activeCategory, setFiltered, posts}) {
    

const ids = {
    help: "62879c849c20178ec23510ab",
    company: "62879b5f9c20178ec23510a7",
    other: "6297512199c7f554fede8195"
}

const filtered = activeCategory.filter((category) => (
    console.log("HOLAAA", category)
))

  return (
    <div className="filter-container">
        {/* <button className="filter-button" onClick={() => setActiveCategory([])}>All Posts</button>
        <button className="filter-button" onClick={() => setActiveCategory([])}>Help wanted</button>
        <button className="filter-button" onClick={() => setActiveCategory([])}>Company wanted</button> */}
        {/* <button className="filter-button" onClick={filtered}>CLICK MEEE</button> */}
    </div>
  )
}

export default Filter;
