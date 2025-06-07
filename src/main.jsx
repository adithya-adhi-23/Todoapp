import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from './pages/Login/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';
import Todo from './pages/Todo/Todo.jsx';
import Home from './pages/Home/Home.jsx';

const router = createBrowserRouter([
     {
    path: "/",
    element: <Home/>
    
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
    {
    path: "/todo",
    element: <Todo/>
  },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
