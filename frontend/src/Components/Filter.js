import { useEffect } from 'react'

function Filter(setActiveCategory, category, setFiltered, filtered, posts) {
  return (
    <div className="filter-container">
        <button className="filter-button" onClick={() => setActiveCategory([])}>All Posts</button>
        <button className="filter-button" onClick={() => setActiveCategory([])}>Help wanted</button>
        <button className="filter-button" onClick={() => setActiveCategory([])}>Company wanted</button>
    </div>
  )
}

export default Filter;
