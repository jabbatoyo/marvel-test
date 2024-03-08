/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataDto, CharacterDto, FavouritesDto, ComicDto } from "..";

export const getStructuredCharactersData = (data: any) => {
  const newResults: CharacterDto[] = [];
  const { count, results } = data;
  const estructuredData: DataDto = {
    count,
    results: [],
  };
  results?.forEach((element: any) => {
    const { id, name, description, thumbnail } = element;
    newResults.push({
      id,
      name,
      description,
      thumbnail,
    });
  });
  return { ...estructuredData, results: newResults };
};

export const getStructuredCharacterData = (
  character: any,
  comics: ComicDto[]
) => {
  const { results } = character;
  const { id, name, description, thumbnail } = results[0];
  const res = {
    id,
    name,
    description,
    thumbnail,
    comics,
  };
  return res;
};

export const getStructuredComicsData = (data: any) => {
  const newResults: ComicDto[] = [];
  const { results } = data;
  results?.forEach((element: any) => {
    const { id, title, thumbnail } = element;
    newResults.push({
      id,
      title,
      thumbnail,
    });
  });
  return newResults;
};

export const isFavourites = (id: number, favorites?: FavouritesDto) => {
  return favorites?.find((element) => element === id);
};
