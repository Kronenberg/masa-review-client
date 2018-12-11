const initialState = {
  testField: 'tratata',
  lastAction: null,
  value: 0
};

function testReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        lastAction: action.type,
        value: ++initialState.value
      };
    case 'DECREMENT':
      return {
        ...state,
        lastAction: action.type,
        value: --initialState.value
      };
    default:
      return state;
  }
}

export default testReducer;