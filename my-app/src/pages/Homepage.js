import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Homepage = () =>{
  return (
    <div className='homePage'>
      <div className='homeItem'>
        <h3 style={{color: "#0015bc"}}> 
          Welcome to <span style={{color: "#ff3333"}}> BeInformedNC! </span>
        </h3>
      </div>
      <div className='homeItem'>
        <h3>
          Our goal is to help you learn about the candidates that will be
          on your ballot in November. Enter your address to start reading!
        </h3>
      </div>
      <div className='homeItem'>
        <h4 style={{color: "#0015bc"}}>
          Find the candidates on your ballot...
            <Form>
              <Form.Group className="formAddress">
                <Form.Control type="input" placeholder="Your Address Here" style={{width: 400}}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
        </h4> 
      </div>        
    </div>
  );
}

export default Homepage;