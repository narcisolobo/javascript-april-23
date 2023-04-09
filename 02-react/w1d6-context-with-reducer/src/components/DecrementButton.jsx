import { useContext } from 'react';
import CounterContext from '../context/CounterContext';

function DecrementButton() {
  const { dispatch } = useContext(CounterContext);

  const handleClick = () => {
    dispatch({
      type: 'DECREMENT',
    });
  };

  return <button onClick={handleClick}>DECREMENT</button>;
}

export default DecrementButton;
