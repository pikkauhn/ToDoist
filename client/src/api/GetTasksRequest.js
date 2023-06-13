import React from 'react';
import Axios from 'axios';

function NewTaskRequest(user) {

    const newTask = async () => {
    Axios.get("http://localhost:3001/todos", user).then((response) => {
        console.log(response.data);
    })
    }      
    newTask();
}

export default NewTaskRequest