import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { ReactNode } from "react";
import { adminRoutes } from "./admin.routes";

export type TChildren = {
  path: string;
  element: ReactNode;
  children: TChildren[];
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "faculty",
    element: <App />,
    children: adminRoutes,
  },
  {
    path: "admin",
    element: <App />,
    children: adminRoutes,
  },
  {
    path: "student",
    element: <App />,
    children: adminRoutes,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;
