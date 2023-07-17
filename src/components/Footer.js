//import react
import React from 'react';
//import Container, Row, Col component
import { Container, Row, Col } from 'react-bootstrap';

//create react functional component Footer
const Footer = () => {
  //this is UI to display
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Habit Tracker</Col>
        </Row>
      </Container>
    </footer>
  );
};

//export Footer
export default Footer;
