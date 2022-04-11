import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateParticipantContainer from "./containers/CreateParticipantContainer";
import DetailParticipantContainer from "./containers/DetailParticipantContainer";
import EditParticipantContainer from "./containers/EditParticipantContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<HomeContainer />}
            />
            <Route
              exact
              path="/create"
              element={<CreateParticipantContainer />}
            />
            <Route
              exact
              path="/detail/:id"
              element={<DetailParticipantContainer />}
            />
            <Route
              exact
              path="/edit/:id"
              element={<EditParticipantContainer />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
