import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';
import About from '../Pages/Home/About/About';
import Projects from '../Pages/Projects/Projects';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/project",
          element:<Projects></Projects>
        }
      ]
    },
  ]);

export default router;