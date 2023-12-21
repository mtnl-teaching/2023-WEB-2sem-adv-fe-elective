import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";
import Characters from "./routes/Characters";
import Locations from "./routes/Locations";
import Episodes from "./routes/Episodes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/characters"} />,
  },
  {
    path: "characters",
    element: (
      <Root>
        <Characters />
      </Root>
    ),
  },
  {
    path: "locations",
    element: (
      <Root>
        <Locations />
      </Root>
    ),
  },
  {
    path: "episodes",
    element: (
      <Root>
        <Episodes />
      </Root>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
