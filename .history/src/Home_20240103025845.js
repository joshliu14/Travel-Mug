import React from "react";
import "./Home.css";

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
    const option = filterOptions[index];
    option.selected = !option.selected;
    filterOptions.splice(index, 1, {
      option,
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
              checked={option.selected}
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
