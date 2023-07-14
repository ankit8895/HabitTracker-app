import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'react-bootstrap';
import { actions } from '../redux/reducers/habitReducer';

const HabitList = () => {
  const dispatch = useDispatch();

  const habitDetails = useSelector((state) => state.habitReducer);

  const { habits } = habitDetails;
  useEffect(() => {}, [habits]);

  const deleteHabitHandler = (habit) => {
    dispatch(actions.deleteHabit(habit));
  };

  return (
    <>
      <Table responsive hover>
        <thead>
          <tr>
            <th>HABIT</th>
            <th>TRACK</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {habits.map((habit, index) => (
            <tr key={index}>
              <td>{habit.title}</td>
              <td>{habit.trackCount}</td>
              <td>
                <Link to={`/week-view/${index}`}>
                  <Button
                    type='button'
                    className='btn btn-info fw-bolder'
                    size='sm'
                  >
                    <i className='fa-solid fa-calendar-week'></i> WEEK VIEW
                  </Button>
                </Link>
              </td>
              <td>
                <Button
                  type='button'
                  className='btn btn-danger fw-bolder'
                  size='sm'
                  onClick={() => deleteHabitHandler(habit)}
                >
                  <i className='fa-solid fa-trash'></i> DELETE
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HabitList;
