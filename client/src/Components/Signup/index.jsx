import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3001/api/users";
            const { data: res } = await Axios.post(url, data);
            navigate('/login');
            console.log(res.message);
        } catch (error) {
            if(error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message)
            }
        }
    }

    return (
        <div className="signupContainer">
            <div className="signupFormContainer">
                <div className="signupLeft"></div>
                <h1>Welcome Back</h1>
                <Link to="/login">
                    <Button>Sign In</Button>
                </Link>
                <div className="signupRight"></div>
                <form onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <InputText
                        placeholder="First Name"
                        name='firstName'
                        onChange={handleChange}
                        value={data.firstName}
                        required
                    />
                    <InputText
                        placeholder="Last Name"
                        name='lastName'
                        onChange={handleChange}
                        value={data.lastName}
                        required
                    />
                    <InputText
                        type='email'
                        placeholder="Email"
                        name='email'
                        onChange={handleChange}
                        value={data.email}
                        required
                    />
                    <InputText
                        type="password"
                        placeholder="Password"
                        name='password'
                        onChange={handleChange}
                        value={data.password}
                        required
                    />
                    {error && <div>{error}</div>}
                    <Button type="submit">Sign Up</Button>
                </form>
            </div>
        </div>
    )
}

export default Signup