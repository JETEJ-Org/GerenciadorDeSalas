import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// Routes
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Start from "./routes/Start/start"
import Home from "./routes/Home/Home";
import Login from "./routes/Login/Login";
import Building from "./routes/Building/Building";

// Components
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";

// Config Routes
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
  },
  {
    path: "/start",
    element: <Start />,
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
