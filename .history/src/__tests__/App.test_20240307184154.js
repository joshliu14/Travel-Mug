import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";
import { FirebaseContext } from "../firebase";
const mockData = {
  item1: {
    /* item data */
  },
  item2: {
    /* item data */
  },
  // ...
};

const mockFirebase = {
  database: () => ({
    ref: jest.fn().mockReturnThis(),
    on: (event, callback) => {
      if (event === "value") {
        callback({
          val: () => mockData,
        });
      }
    },
    off: jest.fn(),
  }),
};

describe("App", () => {
  it("renders without crashing", () => {
    render(
      <FirebaseContext.Provider value={{}}>
        <Router>
          <App />
        </Router>
      </FirebaseContext.Provider>
    );
  });
  it("renders Home component", () => {
    const { getByText } = render(
      <FirebaseContext.Provider value={{}}>
        <Router>
          <App />
        </Router>
      </FirebaseContext.Provider>
    );

    const homeElement = getByText(/Welcome to Travel Mug/i);
    expect(homeElement).toBeInTheDocument();
  });
});
