import React, { useEffect, useState } from 'react'
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

function Navbar({ onShow }) {

    const [show, setShow] = useState({
        "newProject": false,
        "newTask": false,
        "Calendar": true,
        "Projects": true,
        "Tasks": true,
    });

    useEffect(() => {
        onShow(show)
    }, [show]);

    const handleChange = (event) => {
        const name = event.item.name;
        const on = event.item.on;
        if (name === 'newProject' || name === 'newTask' || name === 'Calendar' || name === 'Projects' || name === 'Tasks') {
            setShow({ ...show, [name]: !on });
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }

    const items = [
        {
            label: 'View',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Filter Tasks',
                    items: [
                        { label: 'By Due Date' },
                        { label: 'By Date Entered' },
                        { label: 'By Name' },

                    ]
                },
                {
                    label: 'Show/Hide',
                    items: [
                        {
                            name: 'newProject',
                            label: 'New Project',
                            on: (show.newProject),
                            icon: (show.newProject) ? 'pi pi-fw pi-check' : 'pi pi-fw pi-plus',
                            command: (e) => handleChange(e)
                        },
                        {
                            name: 'newTask',
                            label: 'New Task',
                            on: (show.newTask),
                            icon: (show.newTask) ? 'pi pi-fw pi-check' : 'pi pi-fw pi-plus',
                            command: (e) => handleChange(e),
                        },
                        {
                            name: 'Calendar',
                            label: 'Calendar',
                            on: (show.Calendar),
                            icon: (show.Calendar) ? 'pi pi-fw pi-check' : 'pi pi-fw pi-plus',
                            command: (e) => handleChange(e),
                        },
                        {
                            name: 'Projects',
                            label: 'Projects',
                            on: (show.Projects),
                            icon: (show.Projects) ? 'pi pi-fw pi-check' : 'pi pi-fw pi-plus',
                            command: (e) => handleChange(e),
                        },
                        {
                            name: 'Tasks',
                            label: 'Tasks',
                            on: (show.Tasks),
                            icon: (show.Tasks) ? 'pi pi-fw pi-check' : 'pi pi-fw pi-plus',
                            command: (e) => handleChange(e),
                        },
                    ]
                },

            ]
        },
        {
            label: 'User',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus',

                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus',

                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'Filter',
                            icon: 'pi pi-fw pi-filter',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-power-off',
            command: () => handleLogout(),
        }
    ];

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
    const end = <InputText placeholder="Search" type="text" className="w-full" />;

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}


export default Navbar