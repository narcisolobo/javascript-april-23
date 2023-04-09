export const inititalState = {
  count: 0,
};

export const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'ADD_TWO':
      return {
        ...state,
        count: state.count + 2,
      };
    case 'RESET':
      return {
        ...state,
        count: 0,
      };
    case 'ADD_AMOUNT':
      return {
        ...state,
        count: state.count + parseInt(action.payload),
      };
    default:
      console.error('UNEXPECTED ACTION TYPE');
      return state;
  }
};
