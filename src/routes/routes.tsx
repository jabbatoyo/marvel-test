import HomePage from "../pages/HomePage";
import { RouteObject } from "react-router-dom";
import { LoaderCharacters } from "./loaders";
import { Layout } from "../components";

export const BASE_URL = "/";

const routes: RouteObject[] = [
  {
    path: BASE_URL,
    element: <Layout />,
    children: [
      {
        path: BASE_URL,
        element: <HomePage />,
        loader: LoaderCharacters,
      },
    ],
  },
];

export default routes;
