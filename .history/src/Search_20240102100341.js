import React from "react";
import "./Search.css";

class Search extends React.Component {
  render() {
    return (
      <div className="template">
        <h1>Test</h1>
        <div className="div">
          <h2>testing</h2>
          <div className="overlap">
            <h3>test</h3>
            <div className="overlap-group">
              <h3>test</h3>
              <img className="line" alt="Line" src="line-16.svg" />
              <img className="img" alt="Line" src="line-17.svg" />
            </div>
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
          </div>
          <div className="rectangle-4" />
          <div className="rectangle-5" />
        </div>
      </div>
    );
  }
}

export default Search;
