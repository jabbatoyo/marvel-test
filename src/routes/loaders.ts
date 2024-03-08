import { LoaderFunction } from "react-router-dom";
import { getCharacters } from "../api/endPoints";

export const LoaderCharacters: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search");
  const res = await getCharacters(searchTerm ?? "");
  return res;
};
