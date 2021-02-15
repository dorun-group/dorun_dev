import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

import Home from "./pages/Home/Home";
import Corporate from "./pages/Corporate/Corporate";
import Business from "./pages/Business/Business";
import Contact from "./pages/Contact/Contact";
import Polyplast from "./pages/Polyplast/Polyplast";
import Builders from "./pages/Builders/Builders";
import RealEstate from "./pages/RealEstate/RealEstate";
import Error from "./pages/FourOFour/Error";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/corporate">
            <Corporate />
          </Route>
          <Route path="/business">
            <Business />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/polyplast">
            <Polyplast />
          </Route>
          <Route path="/builders">
            <Builders />
          </Route>
          <Route path="/realestate">
            <RealEstate />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
