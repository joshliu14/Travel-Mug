import React from "react";
import Search from "./Home";

import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/search">
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
