// initial state
const initialState = {
  counter: 0,
  show: false,
};

// reducer
const counterReducer = (state = initialState, action) => {
  if (action.type === "Inc") {
    return { ...state, counter: state.counter + action.payload.x };
  }
  return state;
};

export default counterReducer;
