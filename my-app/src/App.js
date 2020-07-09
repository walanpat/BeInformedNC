import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <div className="Title"><h1>TITLE</h1></div>
      <span className="headerBar">
      <h2>Home</h2>
      <h2>About</h2>
      <h2>Voter Info</h2>
      <h2>Contact Us</h2>
      </span>
      <Homepage/>
    </div>
  );
}

export default App;
