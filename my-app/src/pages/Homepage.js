import React from 'react';


const Homepage = () =>{
    return (
        <div>
        <div className='homepagePrompt'>
            <h1>Find the Candidates on your Ballot</h1>
        </div>
        <span className='homeInput'>
        <form>
        <input placeholder='Your Address Here' />
        </form>
        <button>
            Submit
        </button>
        </span>
        </div>
    );
}

export default Homepage;