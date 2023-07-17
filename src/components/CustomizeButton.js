//import react
import React from 'react';
//import useDispatch hook
import { useDispatch } from 'react-redux';
//import ButtonGroup and ToggleButton component
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
//import actions from reducer
import { actions } from '../redux/reducers/habitReducer';

//create react functional component CustomizeButton
const CustomizeButton = ({ item, habitId, statusIndex, currentDayIndex }) => {
  //to dispatch actions
  const dispatch = useDispatch();
  //toggleHandler called when clicked to toggle between status of the habit
  const toggleHandler = ({ status, statusIndex }) => {
    //dispatch toggleHabit() with HabitId,status and status index in the habit
    dispatch(
      actions.toggleHabit({
        habitId,
        status,
        statusIndex,
      })
    );
  };

  //this is UI to display
  return (
    <>
      {/* if status is Done display below button group */}
      {item === 'Done' ? (
        <ButtonGroup toggle='true'>
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
            key={statusIndex + 1}
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
            key={statusIndex + 2}
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
      ) : // if status is Undone then below button group will be display
      item === 'Undone' ? (
        <ButtonGroup toggle='true'>
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
            key={statusIndex + 1}
            type='radio'
            variant='outline-primary'
            checked={item === 'Undone'}
            disabled={statusIndex > currentDayIndex}
            className='fw-bolder mx-1 text-light'
          >
            UNDONE
          </ToggleButton>

          <ToggleButton
            key={statusIndex + 2}
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
        // if status is neither of two then display below button groups
        <ButtonGroup toggle='true'>
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
            key={statusIndex + 1}
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
            key={statusIndex + 2}
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

//export CustomizeButton
export default CustomizeButton;
