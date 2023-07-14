import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

const HabitList = ({ habits }) => {
  useEffect(() => {}, [habits]);
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
                  <Button type='button' className='btn btn-info' size='sm'>
                    <i className='fa-solid fa-calendar-week'></i> WEEK VIEW
                  </Button>
                </Link>
              </td>
              <td>
                <Button type='button' className='btn btn-danger' size='sm'>
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
