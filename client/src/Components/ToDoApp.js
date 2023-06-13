import React, { useEffect, useState } from 'react';
import './ToDoApp.css';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Panel } from 'primereact/panel';
import Navbar from './Navbar/Navbar';
import NewTaskRequest from '../api/NewTaskRequest';
import getTasks from '../api/GetTasksRequest';
import { useLocation } from 'react-router-dom';


function ToDoApp(token) {
  
  

  const [newTaskInfo, setNewTaskInfo] = useState({
    // taskUser: user,
    taskName: "",
    taskDescription: undefined,
    taskDate: undefined,
    taskFrequency: undefined,
    taskImportant: undefined,
    taskRanking: undefined,
    taskHot: undefined,
    taskProject: undefined,
    taskComplete: undefined,
  });
  const [newProjectInfo, setNewProjectInfo] = useState({
    // projectUser: user,
    projectName: "",
    projectDescription: "",
    projectDate: undefined,
    projectImportant: undefined,
    projectRanking: undefined,
    projectHot: undefined,
    projectComplete: undefined,
  });

  const [show, setShow] = useState({
    "newProject": false,
    "newTask": false,
    "Calendar": true,
    "Projects": true,
    "Tasks": true,
  })

  const [showNewTaskDescription, setShowNewTaskDescription] = useState(false);
  const [showNewProjectDescription, setShowNewProjectDescription] = useState(false);
  const frequencies = [
    'Once',
    'Weekly',
    'Weekly On Day',
    'Bi-Weekly',
    'Bi-Weekly on Day',
    'Monthly On Date'
  ];

  const handleNewTaskChange = (event) => {
    const { name, value } = event.target;
    setNewTaskInfo({ ...newTaskInfo, [name]: value });
  }
  const handleNewProjectChange = (event) => {
    const { name, value } = event.target;
    setNewProjectInfo({ ...newProjectInfo, [name]: value });
  }

  const handleNav = (value) => {
    setShow((prevShow) => {
      return { ...prevShow, ...value }
    })
  }

  const newTaskSubmit = async () => {
    NewTaskRequest(newTaskInfo);
    // console.log(newTaskInfo)

  }

  return (
    <div>
      <div>
        <Navbar onShow={handleNav} />
      </div>
      <div className="row">
        <div className="column1">
          {/* Project Panel */}
          {((show.newProject) ?
            <Panel className="newPanel" header="New Project" toggleable collapsed>
              <div className={`card ${(!showNewProjectDescription) ? 'slide-in' : 'slide-out'}`} id="newCard">
                <div id="addTask">
                  <span className="p-float-label">
                    <InputText id="projectName" name="projectName" value={newProjectInfo.projectName} onChange={handleNewProjectChange} />
                    <label htmlFor='projectName'>Project</label>
                  </span>
                  {(!showNewProjectDescription) ? (
                    <Button id="addProjectDescription" label="Add Description" onClick={() => { setShowNewProjectDescription(true) }} />
                  ) : null}
                  <Calendar name="projectDate" placeholder="Due Date" value={newProjectInfo.projectDate} onChange={handleNewProjectChange} />
                  <Button label="Add Project" />
                </div>
                <div className='desc'>
                  <InputTextarea
                    id="descriptionInput"
                    name="projectDescription"
                    placeholder='Enter Description'
                    autoResize
                    value={newProjectInfo.NewProjectDescription}
                    onChange={handleNewProjectChange}
                  />
                  <Button id="closeDescription" label="X" onClick={() => { setShowNewProjectDescription(false) }} />
                </div>
              </div>
            </Panel>
            : null)}

          {/* Task Panel */}
          {((show.newTask) ?
            <Panel className="newPanel" header="New Task" toggleable collapsed>
              <div className={`card ${(!showNewTaskDescription) ? 'slide-in' : 'slide-out'}`} id="newCard">
                <div id="addTask">
                  <span className="p-float-label">
                    <InputText
                      id="taskName"
                      name='taskName'
                      value={newTaskInfo.taskName}
                      onChange={handleNewTaskChange} />
                    <label htmlFor='taskName'>Task</label>
                  </span>
                  {(!showNewTaskDescription) ? (
                    <Button id="addDescription" label="Add Description" onClick={() => { setShowNewTaskDescription(true) }} />
                  ) : null}
                  <Calendar name='taskDate' placeholder="Due Date" value={newTaskInfo.taskDate} onChange={handleNewTaskChange} />
                  <Dropdown
                    name='taskFrequency'
                    value={newTaskInfo.taskFrequency}
                    onChange={handleNewTaskChange}
                    options={frequencies}
                    placeholder="Select Frequency"
                    className="w-full m:w-14rem"
                  />
                  <Button label="Add Task" onClick={newTaskSubmit} />
                </div>
                <div className='desc'>
                  <InputTextarea
                    name="taskDescription"
                    id="descriptionInput"
                    placeholder='Enter Description'
                    autoResize
                    value={newTaskInfo.taskDescription}
                    onChange={handleNewTaskChange}
                  />
                  <Button id="closeDescription" label="X" onClick={() => { setShowNewTaskDescription(false) }} />
                </div>
              </div>
            </Panel>
            : null)}
          {((show.Tasks) ?
            <Panel className='newPanel' header='Projects' toggleable>

            </Panel>
            : null)}
          {((show.Projects) ?
            <Panel className='newPanel' header='Tasks' toggleable>

            </Panel>
            : null)}
        </div>
        {/* Calendar Panel */}
        {((show.Calendar) ?
          <Panel className="calendarPanel" header="Calendar">
            <Calendar name="taskDate" className="Calendar" value={newTaskInfo.taskDate} onChange={handleNewTaskChange} inline showWeek />
          </Panel>
          : null)}
      </div>

    </div>
  );
}

export default ToDoApp;
