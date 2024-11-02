import React, { useState } from "react";
import { Outlet } from 'react-router-dom';

// Assets
import logoWhiteIcon from "../../assets/login/logo-white.svg";
import lightIcon from "../../assets/login/lamp-light-on.svg";
import darkIcon from "../../assets/login/lamp-light-off.svg";
import illustrationLight from "../../assets/welcome-slideshow/slide2-white.svg";
import illustrationDark from "../../assets/welcome-slideshow/slide2-black.svg";

// Styles
import "./login.css";
import "../../global.css";

// Components


const Login = () => {

  // States
  const [theme, setTheme] = useState(true);
  const [illustration, setIllustration] = useState(illustrationLight);
  const [themeIcon, setThemeIcon] = useState(lightIcon);

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
    <div className="body-login">
      <div className="main-login-container">
        <div className="title-login">
          <img className="logo-login" src={logoWhiteIcon} alt="ROOM LOGO" />
          <img
            id="theme-change"
            className="theme-change-login"
            src={themeIcon}
            alt="mudar tema"
            onClick={toggleTheme}
          />
        </div>

        <div className="frame-main-login">
          <div className="illustration-login">
            <img id="illustration" src={illustration} alt="Ilustração" />
          </div>
          <div className="frame-secondary-login">
            <div className="loginPage">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
