import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Table, ButtonGroup, ToggleButton } from 'react-bootstrap';

const WeekViewPage = () => {
  const { id } = useParams();

  const habitDetails = useSelector((state) => state.habitReducer);
  const { loading, habits } = habitDetails;

  const currentHabit = habits.find((habit) => habit.id === id);

  const date = new Date();

  const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const currentDate = date.getDate();
  const currentDayIndex = date.getDay();

  const startOfWeekDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    currentDate - currentDayIndex + 1
  );

  const toggleHandler = ({ status, statusIndex }) => {};

  return (
    <>
      <Table responsive hover bordered className='table-light'>
        <thead>
          <tr>
            <th>Week Day</th>
            <th>Date</th>
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
                <td>{weekdays[index]}</td>
                <td>{displayDate}</td>
                <td>
                  {item === 'None' && (
                    <ButtonGroup>
                      <ToggleButton
                        variant='primary'
                        size='sm'
                        onClick={() =>
                          toggleHandler({ status: 'Done', statusIndex: index })
                        }
                      >
                        DONE
                      </ToggleButton>
                      <ToggleButton
                        variant='outline-primary'
                        size='sm'
                        onClick={() =>
                          toggleHandler({
                            status: 'Undone',
                            statusIndex: index,
                          })
                        }
                      >
                        UNDONE
                      </ToggleButton>
                      <ToggleButton variant='outline-primary' size='sm'>
                        NONE
                      </ToggleButton>
                    </ButtonGroup>
                  )}

                  {item === 'Done' && (
                    <ButtonGroup>
                      <ToggleButton variant='primary' size='sm'>
                        DONE
                      </ToggleButton>
                      <ToggleButton
                        variant='outline-primary'
                        size='sm'
                        onClick={() =>
                          toggleHandler({
                            status: 'Undone',
                            statusIndex: index,
                          })
                        }
                      >
                        UNDONE
                      </ToggleButton>
                      <ToggleButton
                        variant='outline-primary'
                        size='sm'
                        onClick={() =>
                          toggleHandler({ status: 'None', statusIndex: index })
                        }
                      >
                        NONE
                      </ToggleButton>
                    </ButtonGroup>
                  )}

                  {item === 'Undone' && (
                    <ButtonGroup>
                      <ToggleButton
                        variant='primary'
                        size='sm'
                        onClick={() =>
                          toggleHandler({ status: 'Done', statusIndex: index })
                        }
                      >
                        DONE
                      </ToggleButton>
                      <ToggleButton variant='outline-primary' size='sm'>
                        UNDONE
                      </ToggleButton>
                      <ToggleButton
                        variant='outline-primary'
                        size='sm'
                        onClick={() =>
                          toggleHandler({ status: 'None', statusIndex: index })
                        }
                      >
                        NONE
                      </ToggleButton>
                    </ButtonGroup>
                  )}
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
