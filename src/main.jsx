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
import Todo from './pages/Todo/Todo.jsx'

const router = createBrowserRouter([
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
     {
    path: "/",
    element: 
      <div> Home page </div>
    
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
