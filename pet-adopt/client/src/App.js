import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pets from "./pages/Pets";
import Detail from "./pages/Detail";
import Admin from "./pages/Admin";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Home from "./pages/Home";


function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pets" component={Pets} />
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/pets/:name" component={Admin} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
