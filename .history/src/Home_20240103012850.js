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

const filterOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
const [selectedFilter, setSelectedFilter] = useState(null);

class Search extends React.Component {
  handleFilterChange = () => {
    console.log("click");
  };

  render() {
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
          <div className="filter-container">
            <div className="filter">
              {filterOptions.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedFilter === option}
                    onChange={() => handleFilterChange(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
