//components
import { HeartIcon } from "../../../components";

//types
import { CharacterDto, FavouritesDto } from "../../../api";
import { isFavourites } from "../../../api/utils/utilities";

//contants
import { colorRed, colorWhite } from "../../../config/constants";

//styles
import { DetailCardContainer } from "./detail.styles";

type DetailCardProp = {
  character: CharacterDto;
  favourites: FavouritesDto;
  addFavourites: (id: number) => void;
  removeFavourites: (id: number) => void;
};

const DetailCard = ({
  character,
  favourites,
  addFavourites,
  removeFavourites,
}: DetailCardProp) => {
  return (
    <DetailCardContainer data-testid="detail-container">
      <div className="header-body-content">
        <div className="img-container">
          <img
            src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
            alt={character?.name}
          />
        </div>
        <div className="text-content">
          <div className="name-content-with-heart">
            <h1>{character?.name}</h1>
            {isFavourites(character.id, favourites) ? (
              <HeartIcon
                onClick={() => removeFavourites(character.id)}
                data-testid="heart-removed-favourite"
                color={colorRed}
                isChecked
              />
            ) : (
              <HeartIcon
                onClick={() => addFavourites(character.id)}
                data-testid="heart-added-favourite"
                color={colorWhite}
                isChecked={false}
              />
            )}
          </div>
          <div className="description-content">
            <p>{character?.description}</p>
          </div>
        </div>
      </div>
    </DetailCardContainer>
  );
};

export default DetailCard;
