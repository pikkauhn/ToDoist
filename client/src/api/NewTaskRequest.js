import React from 'react';
import Axios from 'axios';

function NewTaskRequest(creds) {

    const newTask = async (password) => {
    Axios.post("http://localhost:3001/todos/:id", creds).then((response) => {
        console.log(response.data);
    })
    }      
    newTask();
}

export default NewTaskRequest