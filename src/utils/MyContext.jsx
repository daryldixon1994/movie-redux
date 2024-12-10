import { createContext, useReducer } from "react";

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  if (action.type === "INC") {
    return { ...state, counter: state.counter + 1 };
  } else {
    return state;
  }
};
const CounterContext = createContext();

function MyContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export { MyContext, CounterContext };
