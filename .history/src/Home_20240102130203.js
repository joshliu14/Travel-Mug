import React from "react";
import "./Home.css";

class Search extends React.Component {
  render() {
    return (
      <div>
        <div className="top">
          <div className="logo">Logo</div>
          <div className="title">
            <h1>Title</h1>
          </div>
        </div>
        <div className="bottom">
          <div className="nav">Nav bar</div>
          <div className="search-container">
            <input className="search-bar" placeholder="Enter a Preference" />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
