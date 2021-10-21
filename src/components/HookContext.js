import { useState } from "react";
import ReactDOM from "react-dom";

export default function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>{`Hello ${user}`}</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return(
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />

    </>
  );
}

function Component3({ user }) {
  return(
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}