import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createAppRouter } from "./routes/index.tsx";

//customHooks
import { FavouriteProvider } from "./context/favouritesContext.tsx";

//styles
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FavouriteProvider>
      <RouterProvider router={createAppRouter()} />
    </FavouriteProvider>
  </React.StrictMode>
);
