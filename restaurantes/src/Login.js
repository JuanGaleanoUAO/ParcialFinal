import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://us.123rf.com/450wm/sabuhinovruzov/sabuhinovruzov1705/sabuhinovruzov170500027/77413894-icono-de-comida-r%C3%A1pida-en-el-fondo-negro-.jpg' 
                />
            </Link>

            <div className='login__container'>
                <h1>Registrate</h1>

                <form>
                    <h5>Correo electrónico</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Contraseña</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                
                </p>

                <button onClick={register} className='login__registerButton'>Crea tu cuenta</button>
            </div>
        </div>
    )
}

export default Login
