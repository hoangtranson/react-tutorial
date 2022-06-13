import { useRef } from "react";

const RefTutorial = () => {

    const inputRef = useRef(null);

    const onClick = () => {
        console.log('value ==>', inputRef.current.value);
    }

    return (
        <>
            <h1>Ref Tutorial</h1>
            <input type="test" placeholder="Ex..." ref={inputRef}/>
            <button onClick={onClick}>Change name</button>
        </>
    )
}

export default RefTutorial;