import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/database";
import { createStore, combineReducers } from "redux";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from "react-redux-firebase";
import { composeWithDevTools } from "redux-devtools-extension";

const firebaseConfig = {
  apiKey: "AIzaSyBsHXE8NiDCQxc36TD9NdNiGrzVdH3xHSM",
  authDomain: "travel-mug.firebaseapp.com",
  databaseURL: "https://travel-mug-default-rtdb.firebaseio.com",
  projectId: "travel-mug",
  storageBucket: "travel-mug.appspot.com",
  messagingSenderId: "1006497930102",
  appId: "1:1006497930102:web:2e1ab885785ac297a6b857",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.getAuth(app);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  // firestore: firestoreReducer // <- needed if using firestore
});

// Create store with reducers and initial state
const store = createStore(rootReducer, composeWithDevTools());

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
