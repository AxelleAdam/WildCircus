import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import Activity from "./Components/Activity/Activity";
import Tickets from "./Components/Tickets/Tickets";
import Footer from "./Components/Footer/Footer";
import { Switch, Route, withRouter } from "react-router-dom";

function App({ location }) {
  return (
    <div className="App">
      <NavBar />
      <section className="route-section">
        <Switch location={location} key={location}>
          <Route exact path="/" component={HomePage} />
          <Route path="/activity" component={Activity} />
          <Route exact path="/tickets" component={Tickets} />
        </Switch>
      </section>
      <Footer />
    </div>
  );
}

export default withRouter(App);
