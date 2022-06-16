import { useLayoutEffect, useEffect, useRef } from "react";

const LayoutEffectTutorial = () => {
    const nameRef = useRef(null);

    useLayoutEffect( () => {
        console.log("useLayoutEffect => ", nameRef.current.value);
    })

    useEffect(() => {
        console.log("useEffect");
        nameRef.current.value = "Hello";
    })

    return (
        <>
            <h1>Layout Effect Tutorial</h1>
            <input id="username" ref={nameRef} value="Test" style={{width: 400}}/>
        </>
    )
}

export default LayoutEffectTutorial;