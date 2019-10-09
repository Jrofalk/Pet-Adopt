import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pets from "./pages/Pets";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Pets} />
          <Route exact path="/pets" component={Pets} />
          <Route exact path="/pets/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
