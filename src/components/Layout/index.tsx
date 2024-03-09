import {
  Outlet,
  useLocation,
  useNavigation,
  useParams,
} from "react-router-dom";
//components
import { Header, LoadingIcon, Search } from "..";
//styles
import { Container } from "./Layout.styles";

const Layout = () => {
  const { pathname } = useLocation();
  const { state } = useNavigation();
  const { id } = useParams();

  return (
    <Container
      data-testid="layout-container"
      $paddingOff={pathname === `/character/${id}`}
    >
      <Header />
      <div className="body-container">
        {pathname === "/favourites" && pathname !== `/character/${id}` && (
          <h2>FAVOURITES</h2>
        )}
        {pathname !== `/character/${id}` && <Search />}
        {state === "loading" && <LoadingIcon />}
        {state !== "loading" && <Outlet />}
      </div>
    </Container>
  );
};

export default Layout;
