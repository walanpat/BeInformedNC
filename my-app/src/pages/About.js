import React from 'react';
import test from './images/SeniorPicture.jpg'
import test1 from './images/CCG.jpg'

const About = () => {
    return (
        <div>
            <div className='aboutText'>
                <h1 style = {{ marginLeft: 150, marginRight: 150 }}>
                    Mission Statement:
                </h1>
                <h2 style = {{ marginLeft: 150, marginRight: 150 }}>
                    To help North Carolina residents of all ages be more informed of their electoral 
                    candidates at the state, district, and local level.
                </h2>
                <h1 style = {{ marginLeft: 150, marginRight: 150 }}>
                    Bio:
                </h1>
                <h2 style = {{ marginLeft: 150, marginRight: 150 }}> 
                    Developed by University students; emphasize nonpartisan aspect and where 
                    we get our sources from 
                </h2>
                <h1 style = {{ marginLeft: 150, marginRight: 150 }}>
                    Goals:
                </h1>
                <h2 style = {{ marginLeft: 150, marginRight: 150 }}>
                    -To help NC residents be more informed about their candidates
                    <br></br>
                    -Help NC residents register to vote
                    <br></br>
                    -Increase turn out rate for midterm and primary elections
                </h2>
            </div>
            <div className='aboutPics'>
                <img src={test} alt="test" style = {{ width: 200, height: 200 }} />
                <img src={test1} alt="test1" style = {{ width: 200, height: 200 }} />
            </div>
            <div className="captions">
                <caption>Me</caption>
                <caption>Me in Garden</caption>
            </div>
        </div>
    );
}

export default About;