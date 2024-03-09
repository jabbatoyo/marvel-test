import { Link } from "react-router-dom";
//customHooks
import { useFavouriteContext } from "../../context/favouritesContext";
//components
import { HeartIcon } from "..";
//logo
import logo from "../../assets/logo.png";
//contants
import { colorRed } from "../../config/constants";

//styles
import { Container } from "./header.styles";

const Header = () => {
  const { numberOfFavourites } = useFavouriteContext();
  return (
    <Container data-testid="header-container">
      <Link to="/" className="link-content">
        <img src={logo} alt="logo" />
      </Link>
      <Link className="favorite-content" to="/favourites">
        <HeartIcon color={colorRed} isChecked />
        <h3 data-testid="number-of-favourites">{numberOfFavourites}</h3>
      </Link>
    </Container>
  );
};

export default Header;
