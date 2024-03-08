import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
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
const store = createStore(rootReducer);

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
};

const rrfProps = {
  firebase: firebaseMock,
  config: rrfConfig,
  dispatch: store.dispatch,
};

describe("App", () => {
  it("renders without crashing", () => {
    render(
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Router>
            <App />
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  });
  // Other tests...
});
