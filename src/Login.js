import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/add");
        }
    }, [navigate])
    return (
        <div>
            <Header />
            <h1>Login</h1>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="E-mail"></input><br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Senha"></input><br />
        </div>
    )
}

export default Login