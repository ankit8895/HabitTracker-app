import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import HabitModal from '../components/HabitModal';
import HabitList from '../components/HabitList';

const HomePage = () => {
  const habitDetails = useSelector((state) => state.habitReducer);
  const { loading, habits } = habitDetails;

  useEffect(() => {}, [loading, habits]);

  return (
    <>
      <HabitModal />

      {!loading && <HabitList />}
    </>
  );
};

export default HomePage;
