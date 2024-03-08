//customHooks
import useCharacter from "../../hooks/useCharacter";
import { useFavouriteContext } from "../../context/favouritesContext";

//components
import ComicCards from "./components/ComicCards";

//types
import { CharacterDto, FavouritesDto } from "../../api";

//styles
import DetailCard from "./components/DetailCard";

const DetailPage = () => {
  const { character } = useCharacter();
  const { favourites, removeFavourites, addFavourites } = useFavouriteContext();

  return (
    <>
      <DetailCard
        character={character as CharacterDto}
        favourites={favourites as FavouritesDto}
        removeFavourites={removeFavourites}
        addFavourites={addFavourites}
      />
      <ComicCards comics={character.comics} />
    </>
  );
};

export default DetailPage;
