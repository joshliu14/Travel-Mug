import React from "react";
import "./Home.css";

/*import { Link } from "react-router-dom";
 <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Blank</Link>
            <Link to="/">Blank</Link>
          </div> */

class Search extends React.Component {
  render() {
    return (
      <div>
        <div className="top">
          <div className="logo">Logo</div>
          <div className="title">
            <h1>Title</h1>
          </div>
          <div className="search-container">
            Search:{" "}
            <input className="search-bar" placeholder="Enter a Preference" />
            <button>Enter</button>
          </div>
        </div>
        <aside class="filter-sidebar">
      <h2>Filters</h2>
      <div class="filter-section">
        <h3>Category</h3>
        <label><inputtype="checkbox" class="filter-checkbox" data-filter="running"> Running</label>
        <label><input type="checkbox" class="filter-checkbox" data-filter="basketball"> Basketball</label>
        <!-- Add more categories -->
      </div>
      
      <!-- Color filter -->
      <div class="filter-section">
        <h3>Color</h3>
        <label><input type="checkbox" class="filter-checkbox" data-filter="red"> Red</label>
        <label><input type="checkbox" class="filter-checkbox" data-filter="blue"> Blue</label>
        <!-- Add more colors -->
      </div>

      <!-- Size filter -->
      <div class="filter-section">
        <h3>Size</h3>
        <label><input type="checkbox" class="filter-checkbox" data-filter="size-10"> Size 10</label>
        <label><input type="checkbox" class="filter-checkbox" data-filter="size-11"> Size 11</label>
        <!-- Add more sizes -->
      </div>
    </aside>
      </div>
    );
  }
}

export default Search;
