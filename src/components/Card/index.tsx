import { Container } from "./card.styles";
import { HeartRedIcon, HeartWhiteIcon } from "..";
import { CharacterDto } from "../../api";
import { isFavourites } from "../../api/utils/utilities";
import { Link } from "react-router-dom";
import { useFavouriteContext } from "../../context/favouritesContext";

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
      <hr className="sepatator-line" />
      <div className="footer">
        <h2>{name}</h2>
        {isFavourites(id, favourites) ? (
          <HeartRedIcon onClick={() => removeFavourites(id)} />
        ) : (
          <HeartWhiteIcon onClick={() => addFavourites(id)} />
        )}
      </div>
    </Container>
  );
};

export default Card;
