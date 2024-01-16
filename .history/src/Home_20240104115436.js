import React from "react";
import "./Home.css";

import { firebaseConnect, isLoaded } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOptions: [
        { name: "Pour Over", selected: false },
        { name: "Espresso", selected: false },
        { name: "Drip Coffee", selected: false },
        { name: "Cold Brew", selected: false },
        { name: "Pour Over", selected: false },
        { name: "Espresso", selected: false },
        { name: "Drip Coffee", selected: false },
        { name: "Cold Brew", selected: false },
        { name: "Pour Over", selected: false },
        { name: "Espresso", selected: false },
        { name: "Drip Coffee", selected: false },
        { name: "Cold Brew", selected: false },
        { name: "Pour Over", selected: false },
        { name: "Espresso", selected: false },
        { name: "Drip Coffee", selected: false },
        { name: "Cold Brew", selected: false },
        { name: "Pour Over", selected: false },
        { name: "Espresso", selected: false },
        { name: "Drip Coffee", selected: false },
        { name: "Cold Brew", selected: false },
        { name: "Pour Over", selected: false },
        { name: "Espresso", selected: false },
        { name: "Drip Coffee", selected: false },
        { name: "Cold Brew", selected: false },
      ],
      noneSelected: true,
    };
  }

  handleFilterChange = (index) => {
    const filterOptions = this.state.filterOptions.slice();
    filterOptions.splice(index, 1, {
      name: filterOptions[index].name,
      selected: !filterOptions[index].selected,
    });
    this.setState({ filterOptions });
  };

  render() {
    if (!isLoaded(this.props.cafes)) {
      return <div>Loading...</div>;
    }
    const filters = this.state.filterOptions.map((option, index) => {
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

    const cafeObjects = Object.values(this.props.cafes);

    const filteredCafes = cafeObjects.filter((cafe) => {
      return this.state.filterOptions.some(
        (option) => option.selected && cafe.methods.includes(option.name)
      );
    });

    let cafes;
    if (filteredCafes.length !== 0) {
      cafes = filteredCafes.map((cafe, index) => {
        return (
          <div className="cafes" key={index}>
            <div className="cafe-info">
              <h1>{cafe.name}</h1>
            </div>
            <div className="cafe-info">
              {Object.values(cafe.roast).map((item, index) => (
                <h2 key={index}>{item}</h2>
              ))}
            </div>
          </div>
        );
      });
    } else {
      cafes = cafeObjects.map((cafe, index) => {
        return (
          <div className="cafes" key={index}>
            <div className="cafe-info">
              <h1>{cafe.name}</h1>
            </div>
            <div className="cafe-info">
              <h2>Roast Level:</h2>
              {Object.values(cafe.roast).map((item, index) => (
                <h2 key={index}>{item}</h2>
              ))}
            </div>
          </div>
        );
      });
    }

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
          <div className="side-container">
            <div className="side-content">{filters}</div>
          </div>
          <div className="main-container">
            <div className="main-content">
              {cafes}
              {cafes}
              {cafes}
              {cafes}
              {cafes}
            </div>
          </div>
        </div>
        <footer>Copywrite @2024</footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cafes: state.firebase.data.Cafes,
  };
};
export default compose(
  firebaseConnect(["/Cafes"]),
  connect(mapStateToProps)
)(Home);
