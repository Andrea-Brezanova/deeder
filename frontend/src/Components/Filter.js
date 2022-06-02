import { useEffect } from 'react'

function Filter(setCategory, category, setFiltered, filtered, posts) {
  return (
    <div className="filter-container">
        <button className="filter-button" onClick={() => setCategory([])}>All Posts</button>
        <button className="filter-button">Help wanted</button>
        <button className="filter-button">Company wanted</button>
    </div>
  )
}

export default Filter;
