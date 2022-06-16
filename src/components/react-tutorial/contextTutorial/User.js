import { useContext } from "react";
import { UserContext } from ".";

function User(){
  const ctx = useContext(UserContext);
  return (
    <>
      <h1>User name: {ctx.userName}</h1>
    </>
  );
};

export default User;
