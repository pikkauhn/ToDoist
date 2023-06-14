import React from 'react';
import Axios from 'axios';

function NewTaskRequest(newTaskInfo) {

    const newTask = async () => {
    Axios.post("http://localhost:3001/todos", newTaskInfo).then((response) => {
        console.log(response.data);
    })
    }      
    newTask();
}

export default NewTaskRequest