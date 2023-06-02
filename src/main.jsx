import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Layout/Routes/Routes";
import "@smastrom/react-rating/style.css";
import AuthProvider from "./Components/Authentication/Provider/provider";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <div className="max-w-screen-xl">
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </div>
  </Provider>
);
