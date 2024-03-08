export type FetchDto = {
  url: string;
  dataToSend?: any;
};

export type CharacterDto = {
  id: number;
  name: string;
  thumbnail: { extension: string; path: string };
  description: string;
  comics?: ComicDto[];
};

export type DataDto = {
  count: number;
  results: CharacterDto[];
};

export type ComicDto = {
  id: number;
  title: string;
  thumbnail: { extension: string; path: string };
};

export type FavouritesDto = number[];
