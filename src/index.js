import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// Routes
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/Home";
import Login from "./routes/Login/Login";
import Building from "./routes/Building/Building";
import Cadastro from "./routes/Register/Register"
// Filhos de Login
import LoginPage from "./components/loginpage/loginPage";
import RecuperarSenha from "./components/loginpage/recuperarSenha";
import RecuperarSenhaPage from "./components/loginpage/recuperarSenhaPage";
import DefinirNovaSenha from "./components/loginpage/definirNovaSenha";

// Components
import Sidebar from "./components/sidebar/sidebar";

// Config Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
