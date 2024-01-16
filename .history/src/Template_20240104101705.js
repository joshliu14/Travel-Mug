import React from "react";
import "./App.css"; // Import your CSS file

class App extends React.Component {
  handleSidebarScroll = (event) => {
    const sidebar = document.getElementById("sidebar");
    sidebar.scrollTop += event.deltaY;
    event.preventDefault();
  };

  handleMainContentScroll = (event) => {
    const mainContent = document.getElementById("mainContent");
    mainContent.scrollTop += event.deltaY;
    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <div
          className="sidebar"
          id="sidebar"
          onWheel={this.handleSidebarScroll}
        >
          {/* Sidebar content goes here */}
          <ul>
            <li>Sidebar Item 1</li>
            <li>Sidebar Item 2</li>
            <li>Sidebar Item 3</li>
            {/* Add more items as needed */}
          </ul>
        </div>

        <div
          className="main-content"
          id="mainContent"
          onWheel={this.handleMainContentScroll}
        >
          {/* Main content goes here */}
          <h1>Main Content</h1>
          <p>This is the main content area.</p>
          {/* Add more content as needed */}
        </div>
      </div>
    );
  }
}

export default App;
