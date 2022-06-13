import { useState } from "react";
import Login from "./Login";
import User from "./User";

const ContextTutorial = () => {
    const [username, setUsername] = useState("");

    return (
        <>
            <h1>Context Tutorial</h1>
            <Login setUserName={setUsername}/>
            <User username={username}/>
        </>
    )
}

export default ContextTutorial;