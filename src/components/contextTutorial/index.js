import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const UserContext = createContext();

function ContextTutorial(){
  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider value={ {userName, setUserName } }>
      <h1>Context Tutorial</h1>
      <Login />
      <User />
    </UserContext.Provider>
  );
};

export default ContextTutorial;
