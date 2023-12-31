import React, { useState, useContext } from 'react'
import UserContextApi from '../context/UserContextApi'

function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const { setUser } = useContext(UserContextApi)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }
    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />
            <input
                type="password"
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    )
}

export default Login