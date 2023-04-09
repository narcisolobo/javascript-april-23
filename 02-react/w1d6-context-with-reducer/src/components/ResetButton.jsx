import { useContext } from 'react';
import CounterContext from '../context/CounterContext';

function ResetButton() {
  const { dispatch } = useContext(CounterContext);

  const handleClick = () => {
    dispatch({
      type: 'RESET',
    });
  };

  return <button onClick={handleClick}>RESET</button>;
}

export default ResetButton;
