import React, { useEffect, useState } from 'react';
import './ToDoApp.css';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Panel } from 'primereact/panel';
import { ScrollPanel } from 'primereact/scrollpanel';
import Navbar from './Navbar/Navbar';
import NewTaskRequest from '../api/NewTaskRequest';
import Axios from 'axios';
import { Accordion, AccordionTab } from 'primereact/accordion';

function ToDoApp() {
  const [taskList, setTaskList] = useState([]);
  const [loadData, setLoadData] = useState(true);

  useEffect(() => {

    const getTasks = async () => {
      try {
        const response = await Axios.get("http://localhost:3001/todos");
        const tasksData = response.data;
        console.log(response)
        setTaskList(tasksData);
      } catch (err) {
        console.error("Error fetching tasks: ", err);
      }
    };
    const getProjects = async () => {
      try {
        const response = await Axios.get("http://localhost:3001/todos")
      } catch (err) {
        console.error("Error fetching tasks: ", err);
      }
    }

    if (loadData) {
      getTasks();
      setLoadData(false);
    }
  }, [loadData]);

  useEffect(() => {
    console.log(taskList);
  }, [taskList])

  const [newTaskInfo, setNewTaskInfo] = useState({
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

  const renderHeader = (task) => {
    const date = new Date(task.taskDate);
    const month = (date.getMonth());
    const day = (date.getDate());
    const year = (date.getFullYear());
    return (
      <div className='acc'>
        <div className='accName'>{task.taskName}</div>
        <div className='date'>{month}-{day}-{year}</div>
        <i id="icon" name={`important ${task._id}`} className='accIcon pi pi-flag' onClick={handleClick}></i>
        <i id="icon" name={`hot ${task._id}`} className='accIcon pi pi-bolt' onClick={handleClick}></i>
        <i id="icon" name={`complete ${task._id}`} className='accIcon pi pi-check' onClick={handleClick}></i>
      </div>
    )
  }

  const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const name = event.target.getAttribute('name');
    console.log(name)
  }

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
    await NewTaskRequest(newTaskInfo)
    setLoadData(true);
  }

  return (
    <div>
      <div>
        <Navbar onShow={handleNav} />
      </div>
      <div className="row">
        <div className="column1">

         
        </div>

        {/* Calendar Panel */}
        {((show.Calendar) ?
          <Panel className="calendarPanel" header="Calendar">
            <Calendar name="taskDate" className="Calendar" value={newTaskInfo.taskDate} onChange={handleNewTaskChange} inline showWeek />
          </Panel>
          : null)}
      </div>
 {/* New Project Panel */}
 {((show.newProject) ?
            <Panel className="newPanel" header="New Project" toggleable collapsed>
              <div className={`${(!showNewProjectDescription) ? 'slide-in' : 'slide-out'}`} id="newCard">
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

          {/* New Task Panel */}
          {((show.newTask) ?
            <Panel className="newPanel" header="New Task" toggleable collapsed>
              <div className={`${(!showNewTaskDescription) ? 'slide-in' : 'slide-out'}`} id="newCard">
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
      {/* Project Panel */}
      {((show.Projects) ?
        <Panel className='projectPanel' header='Projects' toggleable>
          <ScrollPanel className='taskScrollPanel'>
            <Accordion>
              {taskList.map((task) => (
                <AccordionTab className='taskCard' key={task.taskName} header={renderHeader(task)}>
                  <ul>{task.taskDescription}</ul>
                </AccordionTab>
              ))}
            </Accordion>
          </ScrollPanel>
        </Panel>
        : null)}

      {/* Task Panel */}
      {((show.Tasks) ?
        <Panel className="taskPanel" header='Tasks' toggleable>
          <ScrollPanel className='taskScrollPanel'>
            <Accordion>
              {taskList.map((task) => (
                <AccordionTab className='taskCard' key={task.taskName} header={renderHeader(task)}>
                  <ul>{task.taskDescription}</ul>
                </AccordionTab>
              ))}
            </Accordion>
          </ScrollPanel>
        </Panel>
        : null)}
    </div>
  );
}

export default ToDoApp;
