//import react
import React from 'react';
//import Container and Navbar component
import { Container, Navbar } from 'react-bootstrap';

//create react functional component Header
const Header = () => {
  //this is UI to display
  return (
    <header>
      <Navbar expand='lg' className='bg-body-tertiary fw-bolder'>
        <Container>
          <Navbar.Brand href='/'>
            <img
              src='https://cdn-icons-png.flaticon.com/128/4807/4807720.png'
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt='app-logo'
            />{' '}
            Habit Tracker
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

//export Header
export default Header;
