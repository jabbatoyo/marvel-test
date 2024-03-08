import { fetchApiGet } from "..";
import { API_PUBLIC_KEY } from "../../config/constants";
import {
  getStructuredCharacterData,
  getStructuredCharactersData,
  getStructuredComicsData,
} from "../utils/utilities";

export const getCharacters = async (searchValue?: string) => {
  const url = `characters${API_PUBLIC_KEY}&limit=50${
    searchValue ? `&nameStartsWith=${searchValue}` : ""
  }`;
  const { data }: any = await fetchApiGet({ url });
  const res = getStructuredCharactersData(data);
  return res;
};

export const getCharacter = async (id: number) => {
  const url = `characters/${id}${API_PUBLIC_KEY}`;
  const { data }: any = await fetchApiGet({ url });
  const dataComics = await getComics(id);
  const res = getStructuredCharacterData(data, dataComics);
  return res;
};

export const getComics = async (id: number) => {
  const url = `/characters/${id}/comics${API_PUBLIC_KEY}&limit=20`;
  const { data }: any = await fetchApiGet({ url });
  const res = getStructuredComicsData(data);
  return res;
};
