import React from "react";
import "./Home.css";

class Search extends React.Component {
  render() {
    return (
      <div>
        <div className="top">top</div>
        <div className="bottom">
          <div className="search-bar-container">
            <input className="search-bar" placeholder="Enter a Preference" />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
