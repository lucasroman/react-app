import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  // Number depend on 'count' value
  useEffect(() => {
    setNumber(() => number * 2);
  }, [count]);

  return (
    <div>
      <h1 className="title">HookEffect Component</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <p>Number double: {number}</p>
      
    </div>
  );
}

export default Example;