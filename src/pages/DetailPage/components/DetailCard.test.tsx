import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

//customHooks
import { FavouriteProvider } from "../../../context/favouritesContext";

//component
import DetailCard from "./DetailCard";

describe("COMICS test container", () => {
  const character = {
    id: 1,
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec",
      extension: "jpg",
    },
    description:
      "Rick Jones has been Hulks best bud since day one, but now hes more than a friend",
    name: "Capital Marvel",
  };

  beforeEach(() => {
    render(
      <BrowserRouter>
        <FavouriteProvider>
          <DetailCard
            character={character}
            favourites={[1]}
            removeFavourites={() => {}}
            addFavourites={() => {}}
          />
        </FavouriteProvider>
      </BrowserRouter>
    );
  });

  test("Render COMICS container", () => {
    expect(screen.getAllByTestId("detail-container")).toBeTruthy();
  });

  test("Favourite icon added is in view", () => {
    expect(screen.getByTestId("heart-added-favourite")).toBeDefined();
  });
});
