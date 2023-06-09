import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import LoginRequest from '../api/LoginRequest';


function Login() {

  const [creds, setCreds] = useState({
    "username": "",
    "password": ""
  })

  const handleChange = (e) => {
    const { name, value } = (e.target);
    setCreds({ ...creds, [name]: value });
  }

  const login = async () => {
    await LoginRequest(creds).then((response) => {
      console.log(response)
    })
  }

  return (
    <div>
      <InputText name="username" placeholder='Enter Username' value={creds.username} onChange={handleChange} />
      <Password password="password" placeholder='Enter Password' value={creds.password} onChange={handleChange} feedback={false} />
      <Button label="Submit" onClick={login} />
    </div>
  )
}

export default Login