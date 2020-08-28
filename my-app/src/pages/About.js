import React from 'react';
import headshot from './images/headshot.png'
import chris from './images/closeup.jpg'
import nick from './images/SeniorPicture.jpg'
import will from './images/will1.png'
import alan from './images/alan.jpg'

const About = () => {
    return (
        <div className='aboutPage'>
            <div>
              <h2 className='aboutHeading'>About Us </h2>
            </div>
            
            <div>
              <h3 className='aboutText'> 
                Our mission at BeInformedNC is to help North Carolina residents of all ages be more
                informed of their electoral candidates at the state, district, and local level. 
              </h3>
            </div>

            <div>
              <h3 className='aboutText'>
                We have 3 main goals for this project:
              </h3>
            </div>

            <div>
              <h4 className='aboutText'> 
                1. Help NC residents to be more informed of their candidates <br></br>
                2. Increase turn out rate for midterm and primary elections <br></br>
                3. Help NC residents register to vote 
              </h4>
            </div>


            
            <h2 style={{textAlign: "center", color: "#ff3333",}}> 
            Our Team
            <br></br>
            </h2>

            <div>
              <h4 className='aboutText'>
                We are a group of college students from universities such as UNC Chapel Hill, Purdue, etc.
                We get our information from reliable sources such as (insert sources here).
                We emphasized non-partisanship in creating this website - we want to inform voters, not sway them.
              </h4>
            </div>

            <div>
              <h2 className='aboutHeading'> 
                Founder
              </h2>
            </div>

            <div className='aboutSections'> 
              <div>
                <img src={headshot} alt="Headshot" className="aboutImage"/>
                <p className='aboutName'> Haley Rose </p>
              </div>
            </div>

              <h2 className='aboutHeading'> 
                Research Associates
              </h2>
            
            <div className='aboutSections'>
              <div>
                <img src={headshot} alt='Headshot' className='aboutImage'/>
                <p className='aboutName'>Alex Pinder</p>
              </div>
              <div>
                <img src={headshot} alt='Headshot' className="aboutImage"/>
                <p className='aboutName'>Margaret Pinder</p>
              </div>
              <div>
                <img src={headshot} alt='Headshot' className="aboutImage"/>
                <p className='aboutName'>Andrés Otero</p>
              </div>
              <div>
                <img src={headshot} alt='Headshot' className="aboutImage"/>
                <p className='aboutName'>Quynh Nguyen</p>
              </div>
              <div>
                <img src={headshot} alt='Headshot' className="aboutImage"/>
                <p className='aboutName'>Lily Hornberger</p>
              </div>
              <div>
                <img src={headshot} alt='Headshot' className="aboutImage"/>
                <p className='aboutName'>Mary Agnes Rothenberger</p>
              </div>
              <div>
                <img src={headshot} alt='Headshot' className="aboutImage"/>
                <p className='aboutName'>Ashley Riley</p>
              </div>
              <div>
                <img src={headshot} alt='Headshot' className="aboutImage"/>
                <p className='aboutName'>Holly Rose</p>
              </div>
            </div>
            
            <div>
              <h2 className='aboutHeading'> 
                Web Developers
              </h2>
            </div>

            <div className="aboutSections">
              <div>
                <img src={chris} alt="Christian" className="aboutImage"/>
                <p className='aboutName'>Christian Vallet</p>
              </div>
              <div>
                <img src={nick} alt="Nick" className="aboutImage"/>
                <p className='aboutName'>Nick Georgiou</p>
              </div>
              <div>
                <img src={will} alt="Will" className="aboutImage"/>
                <p className='aboutName'>Will Rogers</p>
              </div>
              <div>
                <img src={alan} alt="Alan" className="aboutImage"/>
                <p className='aboutName'>Alan Patterson</p>
              </div>
            </div>          
        </div>
    );
}

export default About;