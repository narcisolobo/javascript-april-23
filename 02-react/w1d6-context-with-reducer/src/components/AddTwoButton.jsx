import { useContext } from 'react';
import CounterContext from '../context/CounterContext';

function AddTwoButton() {
  const { dispatch } = useContext(CounterContext);

  const handleClick = () => {
    dispatch({
      type: 'ADD_TWO',
    });
  };

  return <button onClick={handleClick}>ADD TWO</button>;
}

export default AddTwoButton;
