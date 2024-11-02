import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    // States
    const [userName, setUserName] = useState("");
    const [loginAlert, setLoginAlert] = useState("");

    // Verificar se o campo de login está vazio
    const handleLogin = () => {
        if (userName === "") {
            setLoginAlert("Por favor insira o seu login!");
        } else {
        }
    };

    return (
        <>
            <h2>Login</h2>
            <div className="loginForm">
                <p id="login-alert">{loginAlert}</p>
                <input
                    id="login-input"
                    type="text"
                    placeholder="Usuário"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input type="password" placeholder="Senha" />
                <fieldset>
                    <label className="checkbox-container">
                        Lembrar-Me
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>

                    <Link to="recuperar_senha">
                        <p>Esqueceu a senha?</p>
                    </Link>
                </fieldset>
                <button id="login-btn" className="button" onClick={handleLogin}>
                    Entrar
                </button>
                <p>
                    Não tem uma conta? <Link to="/cadastro">CADASTRE-SE</Link>
                </p>
            </div>
        </>
    );
};

export default LoginPage;
