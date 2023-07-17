//import react and useState hook
import React, { useState } from 'react';
//import v4 to create unique ID
import { v4 as uuidv4 } from 'uuid';
//import useDispatch hook
import { useDispatch } from 'react-redux';
//import Modal, Button, Form, Row, Col component
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
//import actions from reducer
import { actions } from '../redux/reducers/habitReducer';

//create react functional component HabitModal
const HabitModal = () => {
  //for Modal to to display or not display with initial value false
  const [show, setShow] = useState(false);
  //for habit title when create with initial value with empty string
  const [habitText, setHabitText] = useState('');

  //to dispatch actions
  const dispatch = useDispatch();

  //addHabitHanlder called when clicked to create habit button to dispatch addHabit() to create new habit
  const addHabitHandler = () => {
    //dispatch addHabit()
    dispatch(
      actions.addHabit({
        id: uuidv4(),
        title: habitText,
        status: Array(7).fill('None'),
      })
    );
    //once habit created, set habit title to empty string
    setHabitText('');
    //Also set Modal display to false
    setShow(false);
  };

  //this is UI to display
  return (
    <>
      {/* for heading and create habit button */}
      <Row className='text-center align-items-center mb-3'>
        <Col>
          <h1>Habits</h1>
        </Col>
        <Col>
          <Button
            type='button'
            className='btn btn-primary fw-bolder'
            onClick={() => setShow(true)}
          >
            <i className='fa-solid fa-plus'></i> CREATE HABIT
          </Button>
        </Col>
      </Row>
      {/* Modal where user can enter habit title and create new habit on display */}
      <Modal show={show} onHide={() => setShow(true)}>
        <Modal.Header>
          <Modal.Title>New Habit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Enter</Form.Label>
              <Form.Control
                type='text'
                placeholder='ENTER THE HABIT'
                value={habitText}
                className='fw-bolder'
                onChange={(e) => setHabitText(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type='button'
            className='btn btn-primary fw-bolder'
            onClick={addHabitHandler}
          >
            CREATE
          </Button>
          <Button
            type='button'
            className='btn btn-secondary fw-bolder'
            data-bs-dismiss='modal'
            onClick={() => setShow(false)}
          >
            CLOSE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

//export HabitModal
export default HabitModal;
