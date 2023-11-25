import { useReducer } from "react";
import "./App.css";

type Actiontype =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

type StateType = {
  count: number;
};
const initialState: StateType = {
  count: 0,
};

const reducer = (state: StateType, action: Actiontype): StateType => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };

    case "decrement":
      return { count: state.count - action.payload };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      App
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        decrement
      </button>
    </div>
  );
};

export default App;
