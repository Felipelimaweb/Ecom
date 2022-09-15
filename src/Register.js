import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

function Register() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/add")
        }
    }, [navigate]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function sigup() {
        let item = { name, email, password }
        console.warn(item)
        let result = await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/add")

    }
    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Registro</h1>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Nome"></input><br />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="E-mail"></input><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Senha"></input><br />
                <button onClick={sigup} className="btn btn-primary">Registrar</button>
            </div>
        </>
    )
}

export default Register