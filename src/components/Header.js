import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar expand='lg' className='bg-body-tertiary'>
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

export default Header;
