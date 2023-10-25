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
import Test from './pages/Test/Test.jsx';


///
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Cart from './pages/Cart/Cart.jsx';
import Payment from './pages/Payment/Payment.jsx';
import Order from './pages/Order/Order.jsx';
const stripePromise = loadStripe(`pk_test_51NxsVnLDN7M5wmwbD25KOthKGcCIboO8nzde202QJWvKeb55zHfb70SehpOVnB3mL9PtR3VEvalwWMtPxOMCpCW000Iyq1CBCV`);


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
      {
        path: "/quick-service",
        element: <div>Quick Service</div>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/orders",
        element: <Order />,
      },
      {
        path: "/job",
        element: <Elements stripe={stripePromise} ><Test /></Elements>,
        // element: <div>hiiiiiiiiiiiiii</div>,
      },
      {
        path: "/paymentInfo/:id",
        element: <Elements stripe={stripePromise} ><Payment /></Elements>,
        // element: <div>hiiiiiiiiiiiiii</div>,
      },
      // {
      //   path: "/payment/:id",
      //   element: <Payment />,
      //   // element: <div>hiiiiiiiiiiiiii</div>,
      // },
      {
        path: "/success",
        element: <div>Order success!!!!!!!</div>,
      },
      {
        path: "/cancel",
        element: <div>Order Cancel  !!!!!!!</div>,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
