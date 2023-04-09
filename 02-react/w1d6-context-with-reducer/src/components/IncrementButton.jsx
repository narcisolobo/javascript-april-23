import { useContext } from 'react';
import CounterContext from '../context/CounterContext';

function IncrementButton() {
  const { dispatch } = useContext(CounterContext);

  const handleClick = () => {
    dispatch({
      type: 'INCREMENT',
    });
  };

  return <button onClick={handleClick}>INCREMENT</button>;
}

export default IncrementButton;
