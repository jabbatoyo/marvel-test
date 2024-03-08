import { Container } from "./header.styles";

//logo
import logo from "../../assets/logo.png";
import { HeartRedIcon } from "..";
import { Link } from "react-router-dom";
import { useFavouriteContext } from "../../context/favouritesContext";

const Header = () => {
  const { numberOfFavourites } = useFavouriteContext();
  return (
    <Container data-testid="header-container">
      <Link to="/" className="link-content">
        <img src={logo} alt="logo" />
      </Link>
      <Link className="favorite-content" to="/favourites">
        <HeartRedIcon />
        <h3 data-testid="number-of-favourites">{numberOfFavourites}</h3>
      </Link>
    </Container>
  );
};

export default Header;
