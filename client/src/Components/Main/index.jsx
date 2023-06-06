import { Button } from 'primereact/button'
import React from 'react'



function Main() {

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }

  return (
    <div className="mainContainer">
        <nav className="navbar">
            <h1>TODO</h1>
            <Button onClick={handleLogout}>
                Logout
            </Button>
        </nav>
    </div>
  )
}

export default Main