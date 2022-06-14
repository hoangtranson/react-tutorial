import { useContext } from "react";
import { UserContext } from ".";

function Login() {
  const ctx = useContext(UserContext);

  return (
    <>
      <input
        onChange={(event) => {
            ctx.setUserName(event.target.value);
        }}
        style={{ width: 300, height: 30 }}
        placeholder="Input User Name..."
      />
    </>
  );
};

export default Login;
