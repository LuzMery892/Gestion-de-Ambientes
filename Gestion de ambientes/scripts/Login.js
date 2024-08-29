import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Aquí se realiza la llamada a la API de autenticación
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            // Redirigir según el rol del usuario
            const user = await response.json();
            if (user.rol === 'ROL_COORDINADOR') {
                navigate('/html/coordinador/dashboard');
            } else if (user.rol === 'ROL_ALISTAMIENTO') {
                navigate('/html/alistamiento/dashboard');
            } else if (user.rol === 'ROL_INSTRUCTOR') {
                navigate('/html/instructor/dashboard');
            } else {
                navigate('/default');
            }
        } else {
            // Manejar el error de autenticación
            alert('Error de autenticación. Por favor, verifica tus credenciales.');
        }
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
