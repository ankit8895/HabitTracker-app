import React from 'react';
import { useDispatch } from 'react-redux';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { actions } from '../redux/reducers/habitReducer';

const CustomizeButton = ({ item, habitId, statusIndex, currentDayIndex }) => {
  const dispatch = useDispatch();
  const toggleHandler = ({ status, statusIndex }) => {
    dispatch(
      actions.toggleHabit({
        habitId,
        status,
        statusIndex,
      })
    );
  };
  return (
    <>
      {item === 'Done' ? (
        <ButtonGroup toggle>
          <ToggleButton
            key={statusIndex}
            type='radio'
            variant='outline-primary'
            checked={item === 'Done'}
            disabled={statusIndex > currentDayIndex}
            className='fw-bolder mx-1 text-light'
          >
            DONE
          </ToggleButton>

          <ToggleButton
            key={statusIndex}
            type='radio'
            variant='outline-primary'
            checked={item === 'Undone'}
            disabled={statusIndex > currentDayIndex}
            className='fw-bolder mx-1 text-light'
            onClick={() =>
              toggleHandler({
                status: 'Undone',
                statusIndex,
              })
            }
          >
            UNDONE
          </ToggleButton>

          <ToggleButton
            key={statusIndex}
            type='radio'
            variant='outline-primary'
            checked={item === 'None'}
            disabled={statusIndex > currentDayIndex}
            className='fw-bolder mx-1 text-light'
            onClick={() => toggleHandler({ status: 'None', statusIndex })}
          >
            NONE
          </ToggleButton>
        </ButtonGroup>
      ) : item === 'Undone' ? (
        <ButtonGroup toggle>
          <ToggleButton
            key={statusIndex}
            type='radio'
            variant='outline-primary'
            checked={item === 'Done'}
            disabled={statusIndex > currentDayIndex}
            className='fw-bolder mx-1 text-light'
            onClick={() => toggleHandler({ status: 'Done', statusIndex })}
          >
            DONE
          </ToggleButton>

          <ToggleButton
            key={statusIndex}
            type='radio'
            variant='outline-primary'
            checked={item === 'Undone'}
            disabled={statusIndex > currentDayIndex}
            className='fw-bolder mx-1 text-light'
          >
            UNDONE
          </ToggleButton>

          <ToggleButton
            key={statusIndex}
            type='radio'
            variant='outline-primary'
            checked={item === 'None'}
            disabled={statusIndex > currentDayIndex}
            className='fw-bolder mx-1 text-light'
            onClick={() => toggleHandler({ status: 'None', statusIndex })}
          >
            NONE
          </ToggleButton>
        </ButtonGroup>
      ) : (
        <ButtonGroup toggle>
          <ToggleButton
            key={statusIndex}
            type='radio'
            variant='outline-primary'
            checked={item === 'Done'}
            disabled={statusIndex > currentDayIndex}
            className='fw-bolder mx-1 text-light'
            onClick={() => toggleHandler({ status: 'Done', statusIndex })}
          >
            DONE
          </ToggleButton>

          <ToggleButton
            key={statusIndex}
            type='radio'
            variant='outline-primary'
            checked={item === 'Undone'}
            disabled={statusIndex > currentDayIndex}
            className='fw-bolder mx-1 text-light'
            onClick={() =>
              toggleHandler({
                status: 'Undone',
                statusIndex,
              })
            }
          >
            UNDONE
          </ToggleButton>

          <ToggleButton
            key={statusIndex}
            type='radio'
            variant='outline-primary'
            checked={item === 'None'}
            disabled={statusIndex > currentDayIndex}
            className='fw-bolder mx-1 text-light'
          >
            NONE
          </ToggleButton>
        </ButtonGroup>
      )}
    </>
  );
};

export default CustomizeButton;
