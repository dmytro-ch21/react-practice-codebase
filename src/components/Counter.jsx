// first step import useState hook
import { useState } from 'react';

function Counter() {
  // declare and use the state
  const [count, setCount] = useState(0); // array => [variable, setterFunction]

  // define the event handlers
  const handleIncrement = () => {
    setCount(count + 1);
    console.log(`The count incremented by one, currently is: ${count}`)
  }

  const handleDecrement = () => {
    setCount(count - 1);
    console.log(`The count incremented by one, currently is: ${count}`)
  }

  return (
    <div className="container d-flex justify-content-center">
      <div className="col-4">
        <div className="card" data-bs-theme="dark">
          <h1 className="display-1 card-title text-center">{count}</h1>
        </div>

        <div className="btn-group mt-3 w-100" role="group">
          <button onClick={handleIncrement} className="btn btn-primary" type="button">
            Increment
          </button>
          <button onClick={handleDecrement} className="btn btn-danger" type="button">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
