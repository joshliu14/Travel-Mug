import React from "react";
import "./Home.css";

class Search extends React.Component {
  render() {
    return (
      <div className="template">
        <div className="top-frame">
          <div className="logo" />
          <div className="about">
            <div className="text-wrapper">About</div>
          </div>
        </div>
        <div className="bottom-frame">
          <div className="rectangle" />
        </div>
      </div>
    );
  }
}

export default Search;
