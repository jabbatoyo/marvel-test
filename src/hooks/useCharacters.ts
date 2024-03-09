import { useLoaderData, useLocation } from "react-router-dom";
//customHook
import { useFavouriteContext } from "../context/favouritesContext";
//types
import { DataDto } from "../api";

function useCharacters() {
  const { pathname } = useLocation();
  const { results: characters, count } = useLoaderData() as DataDto;
  const { favourites } = useFavouriteContext();

  const setCorrectCharacters = () => {
    if (pathname === "/favourites") {
      const res = characters.filter((item) =>
        favourites.find((favouriteId) => item.id === favouriteId)
      );
      return res;
    }
    return characters;
  };

  const getTotalResults = () => {
    if (pathname === "/favourites") {
      const character = setCorrectCharacters();
      return character.length;
    }
    return count;
  };

  return {
    totalResults: getTotalResults(),
    characters: setCorrectCharacters(),
  };
}

export default useCharacters;
