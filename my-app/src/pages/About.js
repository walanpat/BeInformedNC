import React from "react";
import headshot from "./images/headshot.png";
import alan from "./images/alan.jpg";
import alex from "./images/alex.JPG";
import andrés from "./images/andrés.jpg";
import ashley from "./images/ashley.jpeg";
import christian from "./images/christian.jpg"
import haley from "./images/haley.jpg";
import lily from "./images/lily.jpg";
import margaret from "./images/margaret.JPG";
import mary from "./images/mary.jpeg";
import nick from "./images/nick.jpg"
import quynh from "./images/quynh.JPG"
import will from "./images/will.png"


const About = () => {
  return (
    <div className="aboutPage">
      <div>
        <h2 className="aboutHeading">About Us </h2>
      </div>

      <div>
        <h3 className="aboutText">
          Our mission at BeInformedNC is to help North Carolina residents of all ages be more informed of their electoral candidates at the state, district, and local level. 
          <br></br>
        </h3>
      </div>

      <div>
        <h3 className="aboutText">We have 3 main goals for this project:</h3>
      </div>

      <div>
        <h4 className="aboutText" style={{textAlign: "left", paddingLeft: "15%"}}>
          1. Help NC residents to be more informed of their candidates on the ballot <br></br>
          2. Help NC residents register to vote <br></br>
          3. Increase turn out rate for midterm and primary elections <br></br>
        </h4>
      </div>

      <h2 className="aboutHeading">
        Our Team
        <br></br>
      </h2>

      <div>
        <h4 className="aboutText">
          We are a group of college students from universities such as UNC
          Chapel Hill, Purdue, etc. We get our information from reliable sources
          such as (insert sources here). We emphasized non-partisanship in
          creating this website - we want to inform voters, not sway them.
        </h4>
      </div>

      <div>
        <h2 className="aboutHeading">Founder</h2>
      </div>

      <div className="aboutSections">
        <div>
          <img src={haley} alt="Haley" className="aboutImage" />
          <h1 className="aboutName"> Haley Rose </h1>
          <h1 className="aboutSchool">UNC Chapel Hill</h1>
        </div>
      </div>

      <h2 className="aboutHeading">Research Associates</h2>

      <div className="aboutSections">
        <div>
          <img src={alex} alt="Alex" className="aboutImage" />
          <h1 className="aboutName">Alex Pinder</h1>
          <h1 className="aboutSchool">UNC Chapel Hill</h1>
        </div>
        <div>
          <img src={margaret} alt="Margaret" className="aboutImage" />
          <h1 className="aboutName">Margaret Pinder</h1>
          <h1 className="aboutSchool">UNC Chapel Hill</h1>
        </div>
        <div>
          <img src={andrés} alt="Andrés" className="aboutImage" />
          <h1 className="aboutName">Andrés Otero</h1>
          <h1 className="aboutSchool">UNC Chapel Hill</h1>
        </div>
        <div>
          <img src={quynh} alt="Quynh" className="aboutImage" />
          <h1 className="aboutName">Quynh Nguyen</h1>
          <h1 className="aboutSchool">UNC Chapel Hill</h1>
        </div>
      </div>
      <div className="aboutSections">
        <div>
          <img src={lily} alt="Lily" className="aboutImage" />
          <h1 className="aboutName">Lily Hornberger</h1>
          <h1 className="aboutSchool">App State University</h1>
        </div>
        <div>
          <img src={mary} alt="Mary" className="aboutImage" />
          <h1 className="aboutName">Mary Agnes Rothenberger</h1>
          <h1 className="aboutSchool">Purdue University</h1>
        </div>
        <div>
          <img src={ashley} alt="Ashley" className="aboutImage" />
          <h1 className="aboutName">Ashley Riley</h1>
          <h1 className="aboutSchool">Stanford University</h1>
        </div>
        <div>
          <img src={headshot} alt="Headshot" className="aboutImage" />
          <h1 className="aboutName">Holly Rose</h1>
          <h1 className="aboutSchool">UNC Chapel Hill</h1>
        </div>
      </div>

      <div>
        <h2 className="aboutHeading">Web Developers</h2>
      </div>

      <div className="aboutSections">
        <div>
          <img src={christian} alt="Christian" className="aboutImage" />
          <h1 className="aboutName">Christian Vallet</h1>
          <h1 className="aboutSchool">UNC Chapel Hill</h1>
        </div>
        <div>
          <img src={nick} alt="Nick" className="aboutImage" />
          <h1 className="aboutName">Nick Georgiou</h1>
          <h1 className="aboutSchool">UNC Chapel Hill</h1>
        </div>
        <div>
          <img src={will} alt="Will" className="aboutImage" />
          <h1 className="aboutName">Will Rogers</h1>
          <h1 className="aboutSchool">UNC Chapel Hill</h1>
        </div>
        <div>
          <img src={alan} alt="Alan" className="aboutImage" />
          <h1 className="aboutName">Alan Patterson</h1>
          <h1 className="aboutSchool">UNC Chapel Hill</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
