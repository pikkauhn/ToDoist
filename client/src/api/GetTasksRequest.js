import { useEffect, useState } from 'react';
import Axios from 'axios';

function GetTasksRequest() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const response = await Axios.get("http://localhost:3001/todos");
      const tasksData = response.data;
      setTasks(tasksData);
    } catch (err) {
      console.error("Error fetching tasks: ", err);
    }
  };

  useEffect(() => {
    getTasks();
  }, [])   

  return tasks;
}

export default GetTasksRequest