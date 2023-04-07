import { useContext } from 'react';
import CounterContext from '../context/CounterContext';
import Button from './ButtonCounter';

function Card() {
  const { counter } = useContext(CounterContext);

  return (
    <fieldset>
      <legend>Card</legend>
      <h3 className="fs-1">COUNT:</h3>
      <h2>{counter}</h2>
      <Button />
    </fieldset>
  );
}

export default Card;
