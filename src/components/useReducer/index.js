import { useReducer } from "react";

const ReducerTutorial = () => {
  const initialState = {
    count: 0,
    showText: true,
  };

  const reducerFn = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "TOGGLE":
        return {
          ...state,
          showText: !state.showText,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLE" });
        }}
      >
        Click here
      </button>

      {state.showText && <p>This is a text</p>}
    </>
  );
};

export default ReducerTutorial;
