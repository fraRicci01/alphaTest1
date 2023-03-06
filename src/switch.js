import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import LogInForm from "./pages/loginForm";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/login",
      element: <LogInForm />,
    },
  ]);

function Switch() {
    return (
      <RouterProvider router={router} />
    );
  }

export default Switch;