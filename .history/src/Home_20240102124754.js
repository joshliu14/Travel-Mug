import React from "react";
import "./Home.css";

class Search extends React.Component {
  render() {
    return (
      <div>
        <div className="top">
          <div className="logo">Logo</div>
          <div className="title">Title</div>
          <div className="nav">Nav bar</div>
        </div>
        <div className="bottom">
          <div className="search-container">
            <input className="search-bar" placeholder="Enter a Preference" />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
