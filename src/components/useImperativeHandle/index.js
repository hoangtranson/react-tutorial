import { useRef } from "react";
import Button from "./Button";

const ImpreativeHandle = () => {
    const btnRef = useRef(null);

    return (
        <>
            <h1>Impreative Handle Tutorial</h1>
            <button onClick={ () => {btnRef.current.alterToggle()}}>Button from parent</button>
            <Button ref={btnRef}/>
        </>
    )
}

export default ImpreativeHandle;