import React, { useState } from 'react';
import './ToDoApp.css';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Panel } from 'primereact/panel';

function ToDoApp() {
  const [toDoName, setToDoName] = useState('');
  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(null);
  const [frequency, setFrequency] = useState(null);
  const frequencies = [
    { name: 'Once' },
    { name: 'Weekly' },
    { name: 'Weekly On Day' },
    { name: 'Bi-Weekly' },
    { name: 'Bi-Weekly on Day' },
    { name: 'Monthly On Date' }
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
}


  return (
    <div>
      <h1>To Do Application</h1>
      <div className="row1">
      <Panel header="New Task" toggleable>
      <div className={`card ${(!showDescription) ? 'slide-in' : 'slide-out'}`} id="newTaskCard">
        <div id="addTask">
          <span className="p-float-label">
            <InputText id="taskName" value={toDoName} onChange={(e) => setToDoName(e.target.value)} />
            <label htmlFor='taskName'>Task</label>
          </span>
          {(!showDescription) ? (
            <Button id="addDescription" label="Add Description" onClick={() => {setShowDescription(true)}} />
          ) : null}
          <Calendar placeholder="Due Date" value={date} onChange={(e) => setDate(e.value)} />
          <Dropdown
            value={frequency}
            onChange={(e) => setFrequency(e.value)}
            options={frequencies}
            optionLabel="name"
            placeholder="Select Frequency"
            className="w-full m:w-14rem"
          />
          <Button label="Add Task" />
        </div>
        <div className='desc'>
          <InputTextarea
            id="descriptionInput"
            placeholder='Enter Description'
            autoResize
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button id="closeDescription" label="X" onClick={() => {setShowDescription(false)}} />
        </div>
      </div>
      </Panel>
      <Panel className="calendarPanel" header="Calendar">
        <Calendar className="Calendar" value={date} onChange={(e) => setDate(e.value)} inline showWeek />
      </Panel>
      </div>
      <Button onClick={handleLogout}>
                Logout
            </Button>
    </div>
  );
}

export default ToDoApp;
