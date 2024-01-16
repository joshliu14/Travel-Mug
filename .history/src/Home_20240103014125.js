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
  constructor(props) {
    super(props);
    this.state = {
      filterOptions: ["Pour Over", "Espresso", "Option 3", "Option 4"]; ,
    };
  }
  handleFilterChange = (option) => {
    console.log("click");
  };

  render() {
    const filterOptions = this.state.filterOptions.map((option) => {
      return (
        <div className="filter">
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              checked={this.state.selectedFilter === option}
              onChange={() => this.handleFilterChange(option)}
            />
            {option}
          </label>
        </div>
      );
    });
    return (
      <div>
        <div className="top">
          <div className="logo">Logo</div>
          <div className="title">
            <h1>Travel Mug</h1>
          </div>
          <div className="search-container">
            Search:{" "}
            <input className="search-bar" placeholder="Enter a Preference" />
            <button>Enter</button>
          </div>
        </div>
        <div className="bottom">
          <div className="filter-container">{filterOptions}</div>
        </div>
      </div>
    );
  }
}

export default Search;
