import React from 'react';
import Axios from 'axios';

function NewTaskRequest(task) {

    const newTask = async () => {
    Axios.post("http://localhost:3001/todos", task).then((response) => {
        console.log(response.data);
    })
    }      
    newTask();
}

export default NewTaskRequest