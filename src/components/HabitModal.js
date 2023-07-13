import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const HabitModal = () => {
  return (
    <>
      <Modal>
        <Modal.Header>
          <Modal.Title>New Habit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Enter</Form.Label>
              <Form.Control type='text' placeholder='Enter the habit' />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type='button' className='btn btn-primary'>
            Create
          </Button>
          <Button
            type='button'
            className='btn btn-secondary'
            data-bs-dismiss='modal'
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HabitModal;
