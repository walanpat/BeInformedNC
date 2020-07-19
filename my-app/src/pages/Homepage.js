import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Homepage = () =>{
    return (
        <div>
            <div className='homepagePrompt'>
                <h1>Find the Candidates on your Ballot</h1>
            </div>
            <Form>
                <Form.Group controlId="formAddress">
                    <Form.Control type="input" placeholder="Your Adress Here" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Homepage;