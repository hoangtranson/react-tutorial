import { useState } from "react";

const User = ({username}) => {

    return (
        <>
            <h1>User name: {username ?? 'N/A'}</h1>
            
        </>
    )
}

export default User;