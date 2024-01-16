import React from "react";
import "./Home.css";

class Search extends React.Component {
  render() {
    return (
      <div>
        <div className="top">top</div>
        <div className="bottom">
          <input placeholder="Enter a Preference" />
        </div>
      </div>
    );
  }
}

export default Search;
