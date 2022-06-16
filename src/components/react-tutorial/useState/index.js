import { useState } from "react";

const StateTutorial = () => {
  let [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(++counter);
    console.log("=>>", counter);
  };

  return (
    <>
      {counter}
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default StateTutorial;
