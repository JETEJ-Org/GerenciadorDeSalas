import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// Routes
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Start from "./routes/Start/start";
import Home from "./routes/Home/Home";
import Login from "./routes/Login/Login";
import Building from "./routes/Building/Building";
import Cadastro from "./routes/Register/Register";
import Reserva from "./routes/Reserva/Reserva";
// Filhos de Login
import LoginPage from "./components/loginpage/loginPage";
import RecuperarSenha from "./components/loginpage/recuperarSenha";
import RecuperarSenhaPage from "./components/loginpage/recuperarSenhaPage";
import DefinirNovaSenha from "./components/loginpage/definirNovaSenha";

// Components
import Sidebar from "./components/sidebar/sidebar";
import Loading from "./components/loading/loading";

// Config Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
  path: "/reserva",
  element: <Reserva />,
  },
  {
    path: "/login",
    element: <Login />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: 'recuperar_senha',
        element: <RecuperarSenha />,
        children: [
          {
            index: true,
            element: <RecuperarSenhaPage />,
          },
          {
            path: 'nova_senha',
            element: <DefinirNovaSenha />,
          }
        ],
      },
    ],
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/sidebar",
    element: <Sidebar />,
  },
  {
    path: "/building",
    element: <Building />,
  },
  {
    path: "/start",
    element: <Start />,
  },
  {
    path: "/splashscreen",
    element: <Loading />,
  }
]);

// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

reportWebVitals();
