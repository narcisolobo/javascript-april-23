import { useContext, useRef } from 'react';
import CounterContext from '../context/CounterContext';

function AddAmountButton() {
  const amountRef = useRef();
  const { dispatch } = useContext(CounterContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(amountRef.current.value);

    dispatch({
      type: 'ADD_AMOUNT',
      payload: amountRef.current.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" ref={amountRef} />
      <button>ADD AMOUNT</button>
    </form>
  );
}

export default AddAmountButton;
