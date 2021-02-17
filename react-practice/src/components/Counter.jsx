import { useState } from 'react';

function Counter() {
  
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}

export default Counter;