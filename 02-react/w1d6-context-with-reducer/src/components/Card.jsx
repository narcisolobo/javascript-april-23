import { useContext } from 'react';
import IncrementButton from './IncrementButton';
import CounterContext from '../context/CounterContext';
import DecrementButton from './DecrementButton';
import AddTwoButton from './AddTwoButton';
import ResetButton from './ResetButton';
import AddAmountButton from './AddAmountButton';

function Card() {
  const { state } = useContext(CounterContext);

  return (
    <fieldset>
      <legend>Card</legend>
      <h3 className="fs-1">COUNT:</h3>
      <h2>{state.count}</h2>
      <fieldset>
        <legend>buttons</legend>
        <DecrementButton />
        <IncrementButton />
        <AddTwoButton />
        <ResetButton />
      </fieldset>
      <fieldset>
        <legend>ADD AMOUNT</legend>
        <AddAmountButton />
      </fieldset>
    </fieldset>
  );
}

export default Card;
