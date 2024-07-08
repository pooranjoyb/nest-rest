import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashboard.tsx";
import Expenses from "./Expenses.tsx";
import AddExpense from "./Forms/AddExpense.tsx";

export const base_url = "http://localhost:3000/api";

const MyApp = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "expenses",
        element: <Expenses />,
      },
      {
        path: "add-expense",
        element: <AddExpense />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={MyApp} />
  </React.StrictMode>
);
