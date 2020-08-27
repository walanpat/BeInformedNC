import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import back from './images/background6.png'

var Background = {
    backgroundImage: `url(${back})`,
    backgroundRepeat  : 'round',
    backgroundSize: "cover"
}
const Homepage = () =>{
  return (
    <div>
      <div className='homePage' style={Background}>
        <h3 style={{color: "#0015bc", textAlign: "center"}}> 
          Welcome to <span style={{color: "#ff3333"}}> BeInformedNC! </span>
        </h3>
        <h3 style={{textAlign: 'center'}}>
          Our goal is to help you learn about the candidates that will be
          on your ballot in November. Enter your address to start reading!
        </h3>
        <h4 style={{color: "#0015bc", textAlign: "center"}}>
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