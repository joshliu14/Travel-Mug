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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOptions: [
        { name: "pour over", selected: false },
        { name: "espresso", selected: false },
        { name: "option 3", selected: false },
        { name: "option 4", selected: false },
      ],
    };
  }
  handleFilterChange = (index) => {
    const filterOptions = this.state.filterOptions.slice();
    filterOptions.splice(index, 1, {
      selected: !filterOptions[index].selected,
    });
    this.setState({ filterOptions });
  };

  render() {
    const filterOptions = this.state.filterOptions.map((option, index) => {
      return (
        <div className="filter" key={index}>
          <label>
            <input
              type="checkbox"
              value={option.name}
              checked={this.state.selectedFilters[index]}
              onChange={() => this.handleFilterChange(index)}
            />
            {option.name}
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

export default Home;
