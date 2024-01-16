import React from "react";
import "./Home.css";
import Logo from "./logo.png";

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
        { name: "Dark", selected: false },
        { name: "Medium", selected: false },
        { name: "Light", selected: false },
        { name: "Light-Medium", selected: false },
        { name: "Iced Coffee", selected: false },
        { name: "Tea", selected: false },
        { name: "Mocktails", selected: false },
        { name: "Almond Milk", selected: false },
        { name: "Oat Milk", selected: false },
        { name: "Ready to Drink", selected: false },
        { name: "Whole Beans", selected: false },
        { name: "Bean Roaster", selected: false },
      ],
      search: "",
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

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClick = () => {};
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
        (option) =>
          (option.selected &&
            (cafe.methods.includes(option.name) ||
              cafe.roast.includes(option.name) ||
              cafe.other.includes(option.name) ||
              cafe.items.includes(option.name))) ||
          cafe.name === this.state.search
      );
    });

    const renderCafes = (cafes) => {
      return cafes.map((cafe, index) => (
        <div className="cafes" key={index}>
          <div className="cafe-info">
            <h1>{cafe.name}</h1>
            {Object.values(cafe.locations).map((item, index) => (
              <h3 key={index}>{item}</h3>
            ))}
          </div>
          <div className="cafe-info">
            <h2>Roast:</h2>
            {Object.values(cafe.roast).map((item, index) => (
              <h3 key={index}>{item}</h3>
            ))}
          </div>
          <div className="cafe-info">
            <h2>Methods:</h2>
            {Object.values(cafe.methods).map((item, index) => (
              <h3 key={index}>{item}</h3>
            ))}
          </div>
          <div className="cafe-info">
            <h2>Items:</h2>
            {Object.values(cafe.items).map((item, index) => (
              <h3 key={index}>{item}</h3>
            ))}
          </div>
          <div className="cafe-info">
            <h2>Other:</h2>
            {Object.values(cafe.other).map((item, index) => (
              <h3 key={index}>{item}</h3>
            ))}
          </div>
        </div>
      ));
    };

    let cafes =
      filteredCafes.length !== 0
        ? renderCafes(filteredCafes)
        : renderCafes(cafeObjects);

    return (
      <div>
        <div className="top">
          <img className="logo" alt="logo" src={Logo} />
          <div className="title">
            <h1>Travel Mug</h1>
            <input
              className="search-bar"
              name="search"
              onChange={this.handleChange}
              placeholder="Enter a Preference"
              value={this.state.search}
            />
          </div>
          <div className="search-container">
            Search: <button onClick={this.handleClick}>Enter</button>
          </div>
        </div>
        <div className="bottom">
          <div className="side-container">
            <div className="side-content">{filters}</div>
          </div>
          <div className="main-container">
            <div className="main-content">{cafes}</div>
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
