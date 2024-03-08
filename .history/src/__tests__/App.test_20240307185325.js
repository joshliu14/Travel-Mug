import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import firebase from "firebase/app";

// Mock Firebase instance
const firebaseMock = {
  // Your mock Firebase methods here
};

// Create mock store
const rootReducer = combineReducers({
  firebase: firebaseReducer,
});
const initialState = {
  firebase: {
    /* initial firebase state */
  },
};
const store = createStore(rootReducer, initialState);

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
};

const rrfProps = {
  firebase: firebaseMock,
  config: rrfConfig,
  dispatch: store.dispatch,
};

// Mock react-redux-firebase functions
jest.mock("react-redux-firebase", () => ({
  firebaseConnect: () => (Component) => Component,
  isLoaded: () => true,
}));

// Mock react-redux function
jest.mock("react-redux", () => ({
  connect: () => (Component) => Component,
  Provider: ({ children }) => children,
}));

// Import your component after the mocks
import Home from "../Home";

describe("Home", () => {
  it("renders without crashing", () => {
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
  });
  // Other tests...
});
