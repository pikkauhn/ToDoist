import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';



function ToDoApp() {

    const [toDoName, setToDoName] = useState('');
    const [showDescription, setShowDescription] = useState(false);
    const [description, setDescription] = useState('');



    return (
        <div>
            <div className="itemWrapper">
                <InputText value={toDoName} onChange={(e) => setToDoName(e.target.toDoName)} />
                {(!showDescription) ?
                    <Button label="Add Description" onClick={() => setShowDescription(!showDescription)} />
                    :
                    <div>
                    <InputTextarea autoResize value={description} onChange={(e) => setDescription(e.target.value)} />
                    <Button label="X" onClick={() => setShowDescription(!showDescription)} />
                    </div>
                }
            </div>
        </div>
    )
}

export default ToDoApp