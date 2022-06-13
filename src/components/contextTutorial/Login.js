import { useState } from "react";

const Login = ({setUserName}) => {

    return (
        <>
            <input onChange={ event => {
                setUserName(event.target.value)
            }} style={ {width: 300, height: 30}}  placeholder="Input User Name..."/>
            
        </>
    )
}

export default Login;