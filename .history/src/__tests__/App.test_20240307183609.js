import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";

describe("App", () => {
  it("renders without crashing", () => {
    render(
      <Router>
        <App />
      </Router>
    );
  });
  it("renders Home component", () => {
    const { getByText } = render(
      <Router>
        <App />
      </Router>
    );

    const homeElement = getByText(/Welcome to Travel Mug/i);
    expect(homeElement).toBeInTheDocument();
  });
});
