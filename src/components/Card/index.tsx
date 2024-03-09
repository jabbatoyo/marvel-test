import { Link } from "react-router-dom";
//customHooks
import { useFavouriteContext } from "../../context/favouritesContext";
//components
import { HeartIcon } from "..";
//types
import { CharacterDto } from "../../api";
import { isFavourites } from "../../api/utils/utilities";
//contants
import { colorRed, colorWhite } from "../../config/constants";
//styles
import { Container } from "./card.styles";

const Card = ({
  character: { id, thumbnail, name },
}: {
  character: CharacterDto;
}) => {
  const { addFavourites, removeFavourites, favourites } = useFavouriteContext();
  return (
    <Container data-testid="card-character-content">
      <Link className="img-container" to={`/character/${id}`}>
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
      </Link>
      <div className="footer">
        <h2>{name}</h2>
        {isFavourites(id, favourites) ? (
          <HeartIcon
            onClick={() => removeFavourites(id)}
            data-testid="heart-added-favourite"
            color={colorRed}
            isChecked
          />
        ) : (
          <HeartIcon
            onClick={() => addFavourites(id)}
            data-testid="heart-remove-favourite"
            color={colorWhite}
            isChecked={false}
          />
        )}
      </div>
    </Container>
  );
};

export default Card;
