import React from 'react';


const Homepage = () =>{
    return (
        <div>
        <div className='homepagePrompt'>
            <h1>Find the Candidates on your Ballot</h1>
        </div>
        <div className='homeInput'>
        <form>
        <input placeholder='Your Address Here' />
        </form>
        <br/>
        <button>
            Submit
        </button>
        </div>
        </div>
    );
}

export default Homepage;