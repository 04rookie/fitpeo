import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SideBar from "./Component/Sidebar";
import Dashboard from "./Routes/Dashboard";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
const router = createBrowserRouter([
  {
    element: <SideBar />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>
);
