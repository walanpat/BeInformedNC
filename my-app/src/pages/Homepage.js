import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//Website Key: 9393762294242856
//const API_key = "AIzaSyDiAo_PfbCBFGXVs4Y5FH3NVnot8frLF7U"

const Homepage = () => {
  const getAddress= (data) => {
    //This is destructuring but we need a text parsing function to properly send in the fetch call with the noted input
    const {City, Street} = data;
    console.log("getAddress called");

      /*Add error handling to catch invalid addresses
           i.e. if status code isn't 200, throw error */

    fetch(
      "https://us-street.api.smartystreets.com/street-address?street=2611+Creek+Manor+Drive&city=Waxhaw&state=NC&candidates=10&key=9393762294242856"
    )
      .then(function (u) {
        return u.json();
      })
      .then(function (json) {
        data = json;
        var county = data[0]["metadata"]["county_name"];
        var district = data[0]["metadata"]["congressional_district"];
        console.log("county is: " + JSON.stringify(county));
        console.log("district is: " + JSON.stringify(district));
      });
  }

  return (
    <div className="homePage">
      <div className="homeItem">
        <h3 style={{ color: "#0660a9" }}>
          Welcome to <span style={{ color: "#ed1c23" }}> BeInformedNC! </span>
        </h3>
      </div>
      <div className="homeItem">
        <h3 style={{ color: "#000000" }}>
          Our goal is to help you learn about the candidates that will be on
          your ballot in November. Enter your address to start reading!
        </h3>
        <h4 style={{ color: "#0660a9" }}>
          Find the candidates on your ballot...
          <Form>
            <Form.Group className="formAddress">
              <Form.Control
                type="input"
                placeholder="Your Address Here"
                style={{ width: 400 }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </h4>
      </div>
    </div>
  );
};

export default Homepage;
