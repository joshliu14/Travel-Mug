import React from "react";
import { render } from "@testing-library/react";
import Home from "../Home";

describe("Home", () => {
  it("renders the home page correctly", () => {
    const { getByText } = render(<Home />);
    const headingElement = getByText("Welcome to the Home Page");
    expect(headingElement).toBeInTheDocument();
  });
});
