import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { actions } from '../redux/reducers/habitReducer';

const HabitModal = () => {
  const [show, setShow] = useState(false);
  const [habitText, setHabitText] = useState('');

  const dispatch = useDispatch();

  const addHabitHandler = () => {
    dispatch(
      actions.addHabit({
        title: habitText,
        trackCount: 0,
      })
    );
    setHabitText('');
    setShow(false);
  };
  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Habits</h1>
        </Col>
        <Col className='text-right'>
          <Button
            type='button'
            className='btn btn-primary'
            onClick={() => setShow(true)}
          >
            <i className='fa-solid fa-plus'></i> Create Habit
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
                placeholder='Enter the habit'
                value={habitText}
                onChange={(e) => setHabitText(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type='button'
            className='btn btn-primary'
            onClick={addHabitHandler}
          >
            Create
          </Button>
          <Button
            type='button'
            className='btn btn-secondary'
            data-bs-dismiss='modal'
            onClick={() => setShow(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HabitModal;
