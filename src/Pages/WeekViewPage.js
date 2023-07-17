//import react
import React from 'react';
//import Link and useParams hook
import { Link, useParams } from 'react-router-dom';
//import useSelector hook
import { useSelector } from 'react-redux';
//import Table and Button components
import { Table, Button } from 'react-bootstrap';
//import CustomizeButton for toggle
import CustomizeButton from '../components/CustomizeButton';

//create react functional component WeekViewPage
const WeekViewPage = () => {
  //extract id from the url
  const { id } = useParams();

  //extract habits from the state
  const habitsDetails = useSelector((state) => state.habitReducer);
  const { habits } = habitsDetails;

  //getting current habit to display week view
  const currentHabit = habits.find((habit) => habit.id === id);

  //create new date object
  const date = new Date();

  //array of week days
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  //getting current date
  const currentDate = date.getDate();
  //getting current day
  const currentDayIndex = date.getDay();

  //getting starting date of the week
  const startOfWeekDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    currentDate - currentDayIndex
  );

  //this is the UI to display
  return (
    <>
      {/* back button to homePage */}
      <Link to='/'>
        <Button type='button' className='btn-light mb-2 fw-bolder'>
          GO BACK
        </Button>
      </Link>
      {/* to display week days progress of the habit */}
      <Table responsive hover>
        <thead>
          <tr>
            <th></th>
            <th className='text-dark'>
              <h4>Week Day</h4>
            </th>
            <th className='text-dark'>
              <h4>Date</h4>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* iterate to the status of the current habit */}
          {currentHabit.status.map((item, index) => {
            const displayDate = new Date(
              startOfWeekDate.getFullYear(),
              startOfWeekDate.getMonth(),
              startOfWeekDate.getDate() + index
            )
              .toDateString()
              .substring(4, 16);
            return (
              <tr key={index}>
                <td></td>
                <td>{weekdays[index]}</td>
                <td>{displayDate}</td>
                <td>
                  {/* to display cutomize button for toggle */}
                  <CustomizeButton
                    item={item}
                    habitId={id}
                    statusIndex={index}
                    currentDayIndex={currentDayIndex}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

//export WeekViewPage
export default WeekViewPage;
