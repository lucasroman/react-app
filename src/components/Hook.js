import React, { useState } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    firstName: 'No firstname',
    lastName: 'No lastname'
  });

    return (
      <div>
        <p>You clicked {count} times</p>
        <p>Current firstname: <b>{user.firstName}</b></p>
        <p>Current lastname: <b>{user.lastName}</b></p>
        <button onClick={() => (
            setCount(count + 1),
            setUser({firstName: 'Jhon', lastName: 'Doe'})
            )}>
            Click me
        </button>
    </div>
    );
}