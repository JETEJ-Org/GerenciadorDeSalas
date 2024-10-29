import React, { useState } from 'react';
import './css/main.css';
import './css/variables.css';
import logoWhiteIcon from './assets/svg/logo-white.svg';
import lightIcon from './assets/svg/lamp-light-on.svg';
import darkIcon from './assets/svg/lamp-light-off.svg';
import illustrationLight from './assets/svg/welcome-slideshow/slide2-white.svg';
import illustrationDark from './assets/svg/welcome-slideshow/slide2-black.svg';

function App() {
  const [userName, setUserName] = useState('');
  const [loginAlert, setLoginAlert] = useState('');
  const [theme, setTheme] = useState(true);
  const [illustration, setIllustration] = useState(illustrationLight);
  const [themeIcon, setThemeIcon] = useState(lightIcon);

  const handleLogin = () => {
    if (userName === "") {
      setLoginAlert("Por favor insira o seu login!");
    } else {
    }
  };

  const toggleTheme = () => {
    if (theme) {
      document.documentElement.style.setProperty('--semantics-three', '#222222');
      document.documentElement.style.setProperty('--green-background', '#123033');
      document.documentElement.style.setProperty('--letras', '#FFFFFF');
      setTheme(false);
      setIllustration(illustrationDark);
      setThemeIcon(darkIcon);
    } else {
      document.documentElement.style.setProperty('--semantics-three', '#DAEAEB');
      document.documentElement.style.setProperty('--green-background', '#127F87');
      document.documentElement.style.setProperty('--letras', '#000000');
      setTheme(true);
      setIllustration(illustrationLight);
      setThemeIcon(lightIcon);
    }
  };

  return (
    <div className="main-container">
      <div className="title">
        <img className="logo" src={logoWhiteIcon} alt="ROOM LOGO" />
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
                <label className="checkbox-container">Lembrar-Me
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>

                <a href="#">
                  <p>Esqueceu a senha?</p>
                </a>
              </fieldset>
              <button id="login-btn" className="button" onClick={handleLogin}>Entrar</button>
              <p>Não tem uma conta? <a href="#">CADASTRE-SE</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
