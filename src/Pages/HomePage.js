//import react
import React from 'react';
//import useSelector hook
import { useSelector } from 'react-redux';
//import Image component
import { Image } from 'react-bootstrap';
//import //HabitModal component
import HabitModal from '../components/HabitModal';
//import HabitList component
import HabitList from '../components/HabitList';

//create react functional component HomePage
const HomePage = () => {
  //extract habits from the state
  const habitsDetails = useSelector((state) => state.habitReducer);
  const { habits } = habitsDetails;

  //this is the UI will be display
  return (
    <>
      <HabitModal />
      {/* if no habits created by the user */}
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
        // once user created the new habit
        <HabitList />
      )}
    </>
  );
};

//export HomePage
export default HomePage;
