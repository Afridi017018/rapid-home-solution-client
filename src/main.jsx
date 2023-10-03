import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Home from './pages/Home/Home.jsx';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/service-details/:id",
        element: <ServiceDetails />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
