import { useEffect } from 'react'

function Filter() {
  return (
    <div className="filter-container">
        <button className="filter-button">All Posts</button>
        <button className="filter-button">Help wanted</button>
        <button className="filter-button">Company wanted</button>
    </div>
  )
}

export default Filter;
