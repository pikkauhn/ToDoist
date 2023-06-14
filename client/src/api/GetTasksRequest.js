import React from 'react';
import Axios from 'axios';

function GetTasksRequest() {    
    const getTasks = async () => {
    Axios.get("http://localhost:3001/todos").then((response) => {
        const tasks = response.data;
        console.log(tasks)
    })
    }     
    getTasks() 
}

export default GetTasksRequest