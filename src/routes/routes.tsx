import HomePage from "../pages/HomePage";
import { RouteObject } from "react-router-dom";
import { LoaderCharacters, LoaderDetailCharacterAndCommics } from "./loaders";
import { Layout } from "../components";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";

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
      {
        path: `${BASE_URL}favourites`,
        element: <HomePage />,
        loader: LoaderCharacters,
      },
      {
        path: `${BASE_URL}character/:id`,
        element: <DetailPage />,
        loader: LoaderDetailCharacterAndCommics,
      },
    ],
  },
  {
    path: `*`,
    element: <NotFoundPage />,
  },
];

export default routes;
