import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'react-bootstrap';
import { actions } from '../redux/reducers/habitReducer';

const HabitList = () => {
  const dispatch = useDispatch();

  const habitsDetails = useSelector((state) => state.habitReducer);

  const { habits } = habitsDetails;
  useEffect(() => {}, [habits]);

  const deleteHabitHandler = (habit) => {
    dispatch(actions.deleteHabit(habit));
  };

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
          {habits.map((habit) => {
            let count = 0;

            habit.status.forEach((status) => {
              if (status === 'Done') {
                count++;
              }
            });

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

export default HabitList;
