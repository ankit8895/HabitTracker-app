//import react
import React from 'react';
//import Link
import { Link } from 'react-router-dom';
//import useDispatch and useSelector hook
import { useDispatch, useSelector } from 'react-redux';
//import Button and Table component
import { Button, Table } from 'react-bootstrap';
//import actions from reducer
import { actions } from '../redux/reducers/habitReducer';

//create react function component HabitList
const HabitList = () => {
  //for dispatch actions
  const dispatch = useDispatch();

  //getting habits from the state
  const habitsDetails = useSelector((state) => state.habitReducer);
  const { habits } = habitsDetails;

  //deleteHabitHandler called to clicked delete button to dispatch deleteHabit() to delete habit
  const deleteHabitHandler = (habit) => {
    //dispatch deleteHabit() with habit
    dispatch(actions.deleteHabit(habit));
  };

  //this is UI to display
  return (
    <>
      <Table responsive hover>
        <thead>
          <tr>
            <th></th>
            <th className='text-dark'>
              <h4>HABIT</h4>
            </th>
            <th className='text-dark'>
              <h4>TRACK</h4>
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* iterate all habits created by user */}
          {habits.map((habit) => {
            // to calculate number of days user completed the habit
            let count = 0;
            habit.status.forEach((status) => {
              if (status === 'Done') {
                count++;
              }
            });

            // this will be display with the habit details
            return (
              <tr key={habit.id}>
                <td></td>
                <td>{habit.title}</td>
                <td>{count}/7 DAYS</td>
                <td>
                  <Link to={`/week-view/${habit.id}`}>
                    <Button type='button' className='btn-primary fw-bolder'>
                      <i className='fa-solid fa-calendar-week'></i> WEEK VIEW
                    </Button>
                  </Link>
                </td>
                <td>
                  <Button
                    type='button'
                    className='btn-primary fw-bolder'
                    onClick={() => deleteHabitHandler(habit)}
                  >
                    <i className='fa-solid fa-trash'></i> DELETE
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

//export HabitList
export default HabitList;
