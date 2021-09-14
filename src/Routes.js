import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Navbar } from "./components";
import Insights from "./Pages/Insights";
import LandingScreen from "./Pages/LandingScreen";

const Routes = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingScreen} />
          <Route path="/insights" component={Insights} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default Routes;
