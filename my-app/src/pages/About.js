import React from 'react';
import test from './images/SeniorPicture.jpg'
import test1 from './images/CCG.jpg'

const About = () => {
    return (
        <div>
            <div className='aboutTest'>
                <h2> BeInformedNC is a project designed to get voters more informed about the candidates 
                which they are voting for. We are a group of university students with a focus on nonpartisanship
                and our sources are very credible.
                </h2>
            </div>
            <div className='aboutPics'>
            <img src={test} alt="test" />
            <img src={test1} alt="test1" />
            </div>
            <h1>Me</h1>
        </div>
    );
}

export default About;