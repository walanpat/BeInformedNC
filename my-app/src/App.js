import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>TITLE</h1>
      <h2>Home</h2>
      <h2>About</h2>
      <h2>Voter Info</h2>
      <h2>Contact Us</h2>
      <Homepage/>

    </div>
  );
}

export default App;
