import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Table } from 'react-bootstrap';

const HabitList = ({ habits }) => {
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
              <td></td>
              <td></td>
              <td>
                <Link to={`/week-view/${index}`}>
                  <Button type='button' className='btn btn-info'>
                    <i className='fa-solid fa-calendar-week'></i> Week View
                  </Button>
                </Link>
              </td>
              <td>
                <Button type='button' className='btn btn-danger'>
                  <i className='fa-solid fa-trash'></i>
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
