import { useEffect, useState } from "react";
import axios from "axios";

const EffectTutorial = () => {

    const [email, setEmail] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then( res => {
            console.log("calling API", res.data);
            setEmail(res.data[0].email)
        })
    }, []);

    return (
        <>
            <div>Hello world {email}</div>
        </>
    )
}


export default EffectTutorial;