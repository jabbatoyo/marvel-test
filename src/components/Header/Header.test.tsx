import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

//customHooks
import { FavouriteProvider } from "../../context/favouritesContext";

//component
import Header from "./index";

describe("Header test container", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <FavouriteProvider>
          <Header />
        </FavouriteProvider>
      </BrowserRouter>
    );
  });

  test("Render component header container", async () => {
    expect(screen.getAllByTestId("header-container")).toBeTruthy();
  });
});
