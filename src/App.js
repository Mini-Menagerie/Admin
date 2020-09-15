import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import { Login } from './pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
