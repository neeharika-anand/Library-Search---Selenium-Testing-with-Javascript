// import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Librarysearch from "./components/librarysearch";
import Profile from "./components/Profile";


function App() {


  return (
    <div className="App">
      <Router>
        <NavBar
        />
        <Routes>
          {/* <Route exact path="/" element={<Login />} /> */}

          <Route exact path="/" element={<Librarysearch />} />
        
          <Route
            exact
            path="/profile"
            element={<Profile />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
