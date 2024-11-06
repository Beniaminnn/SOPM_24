// src/components/Login.js
import React, { useState } from 'react';
import './Login.css'; // Stiluri pentru login

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        // Verificăm dacă utilizatorul și parola sunt corecte (poți modifica logică pentru autentificare reală)
        if (username === 'admin' && password === 'password') {
            onLogin(); // Funcție de callback pentru a schimba starea aplicației
        } else {
            setError('Username sau parola incorecte!');
        }
    };

    return (
        <div className="login-container">
            <h2>Autentificare</h2>
            <div className="login-form">
                <input
                    type="text"
                    placeholder="Utilizator"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Parola"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Autentificare</button>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default Login;
