import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import CustomizeButton from '../components/CustomizeButton';

const WeekViewPage = () => {
  const { id } = useParams();

  const habitsDetails = useSelector((state) => state.habitReducer);
  const { habits } = habitsDetails;

  const currentHabit = habits.find((habit) => habit.id === id);

  const date = new Date();

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const currentDate = date.getDate();
  const currentDayIndex = date.getDay();

  const startOfWeekDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    currentDate - currentDayIndex
  );

  return (
    <>
      <Link to='/'>
        <Button type='button' className='btn-light mb-2 fw-bolder'>
          GO BACK
        </Button>
      </Link>
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

export default WeekViewPage;
