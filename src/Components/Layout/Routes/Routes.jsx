/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Home/Home";
import OurMenu from "../../OurMenu/OurMenu";
import OrderFood from "../../OurFood/OurFood";
import Login from "../../Authentication/Login/Login";
import Registration from "../../Authentication/Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ourMenu",
        element: <OurMenu />,
      },
      {
        path: "/order/:category",
        element: <OrderFood />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <Registration />,
      },
    ],
  },
]);

export default router;
