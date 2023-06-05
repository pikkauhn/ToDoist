import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import LoginRequest from '../api/LoginRequest';
        

function Login() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
      await LoginRequest(userName, password)
    }

  return (
    <div>
        <InputText placeholder='Enter Username' value={userName} onChange={(e) => setUserName(e.target.value)} />
        <Password placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} feedback={false} />
        <Button label="Submit" onClick={login}/>
    </div>
  )
}

export default Login