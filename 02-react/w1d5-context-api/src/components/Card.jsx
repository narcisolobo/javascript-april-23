import { useContext } from 'react';
import CounterButton from './CounterButton';
import CounterContext from '../context/CounterContext';

function Card() {
  const { counter } = useContext(CounterContext);

  return (
    <fieldset>
      <legend>Card</legend>
      <h3 className="fs-1">COUNT:</h3>
      <h2>{counter}</h2>
      <CounterButton />
    </fieldset>
  );
}

export default Card;
