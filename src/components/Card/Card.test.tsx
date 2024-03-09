import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

//customHooks
import { FavouriteProvider } from "../../context/favouritesContext";

//component
import Card from "./index";

describe("Card test container", () => {
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
          <Card character={character} />
        </FavouriteProvider>
      </BrowserRouter>
    );
  });

  test("Render component card", () => {
    const card = screen.getAllByTestId("card-character-content");
    expect(card).toBeTruthy();
  });

  test("Card contain correct character name Capital Marvel", () => {
    const button = screen.getByText("Capital Marvel");
    expect(button).toBe;
  });

  test("action add fovourite clicked and show button remove favourite", () => {
    const removeFavourite = screen.getByTestId("heart-added-favourite");
    fireEvent.click(removeFavourite);
    expect(screen.getByTestId("heart-removed-favourite")).toBeDefined();
  });

  test("action remove favourite is clicked and show button add favourite", () => {
    const removeFavourite = screen.getByTestId("heart-removed-favourite");
    fireEvent.click(removeFavourite);
    expect(screen.getByTestId("heart-added-favourite")).toBeDefined();
  });
});
