import { LoaderFunction } from "react-router-dom";
import { getCharacter, getCharacters } from "../api/endPoints";

export const LoaderCharacters: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search");
  const res = await getCharacters(searchTerm ?? "");
  return res;
};

export const LoaderDetailCharacterAndCommics: LoaderFunction = async ({
  params,
}) => {
  const { id } = params;
  const res = await getCharacter(Number(id));

  return res;
};
