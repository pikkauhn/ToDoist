import React from 'react';
import Axios from 'axios';

function LoginRequest(creds) {

    const credCheck = async (password) => {
        console.log(password)
    Axios.post("http://localhost:3001/Login", creds).then((response) => {
        console.log(response.data);
    })
    }      
    credCheck();
}

export default LoginRequest