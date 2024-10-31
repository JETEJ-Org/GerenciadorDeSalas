import React, { useState } from "react";

// Assets
import logoWhiteIcon from "../../assets/login/logo-white.svg";
import lightIcon from "../../assets/login/lamp-light-on.svg";
import darkIcon from "../../assets/login/lamp-light-off.svg";
import illustrationLight from "../../assets/welcome-slideshow/slide2-white.svg";
import illustrationDark from "../../assets/welcome-slideshow/slide2-black.svg";

// Styles
import "./login.css";
import "../../global.css";

const Login = () => {

  // States
  const [userName, setUserName] = useState("");
  const [loginAlert, setLoginAlert] = useState("");
  const [theme, setTheme] = useState(true);
  const [illustration, setIllustration] = useState(illustrationLight);
  const [themeIcon, setThemeIcon] = useState(lightIcon);

  // Verificar se o campo de login está vazio
  const handleLogin = () => {
    if (userName === "") {
      setLoginAlert("Por favor insira o seu login!");
    } else {
    }
  };

  // Função para mudar o tema
  const toggleTheme = () => {
    if (theme) {
      document.documentElement.style.setProperty(
        "--semantics-three",
        "#222222",
      );
      document.documentElement.style.setProperty(
        "--green-background",
        "#123033",
      );
      document.documentElement.style.setProperty("--letras", "#FFFFFF");
      setTheme(false);
      setIllustration(illustrationDark);
      setThemeIcon(darkIcon);
    } else {
      document.documentElement.style.setProperty(
        "--semantics-three",
        "#DAEAEB",
      );
      document.documentElement.style.setProperty(
        "--green-background",
        "#127F87",
      );
      document.documentElement.style.setProperty("--letras", "#000000");
      setTheme(true);
      setIllustration(illustrationLight);
      setThemeIcon(lightIcon);
    }
  };

  // Render
  return (
    <div className="bodyLogin">
      <div className="main-container">
        <div className="title">
          <img className="logo-login" src={logoWhiteIcon} alt="ROOM LOGO" />
          <img
            id="theme-change"
            className="theme-change"
            src={themeIcon}
            alt="mudar tema"
            onClick={toggleTheme}
          />
        </div>

        <div className="frame-main">
          <div className="secondary-illustration">
            <img id="illustration" src={illustration} alt="Ilustração" />
          </div>

          <div className="frame-secondary">
            <div className="loginPage">
              <h2>Login</h2>
              <div className="loginForm">
                <p>{loginAlert}</p>
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

                  <a href="#">
                    <p>Esqueceu a senha?</p>
                  </a>
                </fieldset>
                <button id="login-btn" className="button" onClick={handleLogin}>
                  Entrar
                </button>
                <p>
                  Não tem uma conta? <a href="#">CADASTRE-SE</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
