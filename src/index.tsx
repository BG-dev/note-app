import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Note } from "./components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotesContextProvider } from "./context/NotesContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:id",
        element: <Note />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <NotesContextProvider>
      <RouterProvider router={router} />
    </NotesContextProvider>
  </React.StrictMode>
);
