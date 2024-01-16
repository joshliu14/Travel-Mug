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
          </div>
        </div>
        <div className="bottom">
          <div className="aside">
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
