import React from 'react';
import { useSelector } from 'react-redux';
import { Image } from 'react-bootstrap';
import HabitModal from '../components/HabitModal';
import HabitList from '../components/HabitList';

const HomePage = () => {
  const habitsDetails = useSelector((state) => state.habitReducer);
  const { habits } = habitsDetails;

  return (
    <>
      <HabitModal />
      {habits.length === 0 ? (
        <div className='text-center text-body-secondary'>
          <h1>NO HABITS TO DISPLAY</h1>
          <Image
            src='https://cdn-icons-png.flaticon.com/128/9961/9961902.png'
            height='300px'
            width='300px'
            alt='nothing-icon'
          />
        </div>
      ) : (
        <HabitList />
      )}
    </>
  );
};

export default HomePage;
