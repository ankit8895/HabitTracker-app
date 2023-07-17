import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { actions } from '../redux/reducers/habitReducer';

const HabitModal = () => {
  const [show, setShow] = useState(false);
  const [habitText, setHabitText] = useState('');

  const dispatch = useDispatch();

  const addHabitHandler = () => {
    dispatch(
      actions.addHabit({
        id: uuidv4(),
        title: habitText,
        status: Array(7).fill('None'),
      })
    );
    setHabitText('');
    setShow(false);
  };
  return (
    <>
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

export default HabitModal;
