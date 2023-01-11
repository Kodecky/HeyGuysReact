import React, { useState } from 'react';
import './styles/global.css';

function App() {
  //For the UI/DOM to keep up and update accordingly with our variables, we need to add “state” to the component.
  //We can do this by using the useState hook.
  const [count, setCount] = useState(0); //passing in the initial value of the variable, usually it's either 0, an empty string (''), empty array ([]), empty object ({}), null or false.

  const incrementCount = () => setCount((prevCount) => prevCount + 1);
  const decrementCount = () => setCount((prevCount) => prevCount - 1);

  // While calling setCount function we can pass either a value, (for example setState(5);) or a function.
  // In this example we pass in a function, because we want to reference the previous state value as it determines the next one.
  // The first argument of a passed in function is the previous value of the variable. We can use this to increment the count by 1.
  // Explanation: https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous

  return (
    <main>
      <div className="max-w-screen-lg px-5 py-20 mx-auto">
        <p className="mb-10 text-xl">
          Your value is <span className="font-bold">{count}</span>
        </p>
        <button onClick={incrementCount} className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 active:bg-blue-800">
          Increment
        </button>
        <button onClick={decrementCount} className="px-4 py-2 ml-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 active:bg-blue-800">
          Decrement
        </button>
      </div>
    </main>
  );

}

export default App;
