import { render, screen, waitFor } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

//customHooks
import { FavouriteProvider } from "../../context/favouritesContext";

//component
import Layout from "./index";
import routes from "../../routes/routes";

describe("Layout test container with home route", () => {
  beforeEach(() => {
    render(<Layout />, {
      wrapper: () => (
        <FavouriteProvider>
          <RouterProvider
            router={createMemoryRouter(routes, {
              initialEntries: ["/"],
            })}
          />
        </FavouriteProvider>
      ),
    });
  });

  test("Render Layout component", async () => {
    await waitFor(() => {
      expect(screen.getAllByTestId("layout-container")).toBeTruthy();
    });
  });

  test("Check text SEARCH COMPONENT is render", async () => {
    await waitFor(() => {
      expect(screen.getAllByTestId("search-container")).toBeTruthy();
    });
  });

  test("Check text FAVOURITES  is hidden", async () => {
    await waitFor(() => {
      expect(screen.queryByText("FAVOURITES")).toBeNull();
    });
  });
});

describe("Layout test container with favourites route", () => {
  beforeEach(() => {
    render(<Layout />, {
      wrapper: () => (
        <FavouriteProvider>
          <RouterProvider
            router={createMemoryRouter(routes, {
              initialEntries: ["/favourites"],
            })}
          />
        </FavouriteProvider>
      ),
    });
  });

  test("Check text FAVOURITES is render ", async () => {
    await waitFor(() => {
      expect(screen.getByText("FAVOURITES")).toBeTruthy();
    });
  });

  test("Check text SEARCH COMPONENT is hidden", async () => {
    await waitFor(() => {
      expect(screen.queryByTestId("search-container")).toBeNull();
    });
  });
});
