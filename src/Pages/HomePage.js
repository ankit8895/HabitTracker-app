import React, { useState } from 'react';
import HabitModal from '../components/HabitModal';
import HabitList from '../components/HabitList';

const HomePage = () => {
  const [modalAlert, setModalAlert] = useState(false);

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Habits</h1>
        </Col>
        <Col className='text-right'>
          <Button type='button' className='btn btn-primary'>
            <i className='fa-solid fa-plus'></i> Create Habit
          </Button>
        </Col>
      </Row>

      <HabitModal />
      <HabitList />
    </>
  );
};

export default HomePage;
