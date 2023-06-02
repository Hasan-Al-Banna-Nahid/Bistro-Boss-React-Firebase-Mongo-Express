import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Layout/Routes/Routes";
import "@smastrom/react-rating/style.css";
import Provider from "./Components/Authentication/Provider/provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-xl">
      <Provider>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  </React.StrictMode>
);
