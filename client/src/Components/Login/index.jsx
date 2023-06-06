import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

function Signup() {

    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState('');

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3001/api/auth";
            const { data: res } = await Axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/";
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message)
            }
        }
    }

    return (
        <div className="signupContainer">
            <div className="signupFormContainer">
                <div className="signinLeft">
                    <form onSubmit={handleSubmit}>
                        <h1>Login to Your Account</h1>
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
                        <Button type="submit">Sign In</Button>
                    </form>
                </div>

                <div className="signinRight">
                    <h1>New User?</h1>
                    <Link to="/signup">
                        <Button>Sign Up!</Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Signup