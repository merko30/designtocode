import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";

import Home from "./pages/Home.jsx";
import First from "./pages/First/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/first",
    Component: First,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
