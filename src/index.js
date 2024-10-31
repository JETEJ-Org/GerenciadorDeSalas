import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import reportWebVitals from "./reportWebVitals";

// Configurando router
import Home from "./routes/Home";
import Building from "./routes/Building";
import Login from "./routes/Login";
import Sidebar from "./components/sidebar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

reportWebVitals();
