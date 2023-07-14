import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Row, Col } from 'react-bootstrap';
import HabitModal from '../components/HabitModal';
import HabitList from '../components/HabitList';

const HomePage = () => {
  const habitDetails = useSelector((state) => state.habitReducer);
  const { loading, habits } = habitDetails;

  useEffect(() => {}, [loading, habits]);

  return (
    <>
      <HabitModal />

      {!loading && <HabitList habits={habits} />}
    </>
  );
};

export default HomePage;
