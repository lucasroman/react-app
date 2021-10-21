import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function Component1() {
  // const [firstName] = useState("Jesse");
  // const [lastName] = useState("Hall");
  const [user, setUser] = useState({
    firstName: 'Jhon',
    lastName: 'Rambo'
  });

  return (
    <UserContext.Provider value={user.firstName, user.lastName}>
      <h1>{`Hello from first component, user: ${user.firstName}`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return(
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  // Continue here!
  const firstName = useContext(UserContext).firstName;
  const lastName = useContext(UserContext);
  return(
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${firstName} again!`}</h2>
      <h3>Your lastname is {lastName}</h3>
    </>
  );
}