import React from "react";
import "./Home.css";

import { firebaseConnect, isLoaded } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.sidebarRef = React.createRef();
    this.mainContentRef = React.createRef();
    this.containerRef = React.createRef();
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

  handleSidebarScroll = (event) => {
    if (this.sidebarRef.current) {
      this.sidebarRef.current.scrollTop += event.deltaY;
      event.preventDefault();
    }
  };

  handleMainContentScroll = (event) => {
    if (this.mainContentRef.current) {
      this.mainContentRef.current.scrollTop += event.deltaY;
      event.preventDefault();
    }
  };

  handleContainerScroll = (event) => {
    if (this.containerRef.current) {
      this.containerRef.current.scrollTop += event.deltaY;
      event.preventDefault();
    }
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

    const filteredCafes = [];

    for (let i = 0; i < cafeObjects.length; i++) {
      for (let j = 0; j < this.state.filterOptions.length; j++) {
        if (
          this.state.filterOptions[j].selected &&
          cafeObjects[i].methods.indexOf(this.state.filterOptions[j].name) !==
            -1 &&
          filteredCafes.indexOf(cafeObjects[i]) === -1
        ) {
          filteredCafes.push(cafeObjects[i]);
        }
      }
    }

    let cafes;
    if (filteredCafes.length !== 0) {
      cafes = filteredCafes.map((cafe, index) => {
        return (
          <div className="cafe" key={index}>
            <div className="cafe">
              <h1>{cafe.name}</h1>
            </div>
            <div className="cafe">
              {Object.values(cafe.roast).map((item, index) => (
                <h1 key={index}>{item}</h1>
              ))}
            </div>
          </div>
        );
      });
    } else {
      cafes = cafeObjects.map((cafe, index) => {
        return (
          <div className="cafe" key={index}>
            <div className="cafe">
              <h1>{cafe.name}</h1>
            </div>
            <div className="cafe">
              {Object.values(cafe.roast).map((item, index) => (
                <h1 key={index}>{item}</h1>
              ))}
            </div>
          </div>
        );
      });
    }

    return (
      <div
        className="container"
        ref={this.containerRef}
        onWheel={this.handleContainerScroll}
      >
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
          <div
            className="sidebar"
            id="sidebar"
            ref={this.sidebarRef}
            onWheel={this.handleSidebarScroll}
          >
            {filters}
          </div>
          <div
            className="main-content"
            id="mainContent"
            ref={this.mainContentRef}
            onWheel={this.handleMainContentScroll}
          >
            {cafes}
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
