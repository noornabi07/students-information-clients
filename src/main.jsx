import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Student from './components/Student/Student';
import AddStudent from './components/AddStudent/AddStudent';
import Update from './components/Update/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/service',
        element: <AddStudent></AddStudent>
      },
      {
        path: '/student',
        element: <Student></Student>,
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:4000/students/${params.id}`)
      },
      {
        path: '/',
        element: <Student></Student>,
        loader: () => fetch('http://localhost:4000/students')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
