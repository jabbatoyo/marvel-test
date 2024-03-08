import { render, screen, waitFor } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

//component
import CardContainer from "./index";
import { FavouriteProvider } from "../../context/favouritesContext";
import routes from "../../routes/routes";

describe("CardContainer test", () => {
  beforeEach(() => {
    render(<CardContainer />, {
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

  test("Render component card container", async () => {
    await waitFor(() => {
      expect(screen.getAllByTestId("card-container")).toBeTruthy();
    });
  });

  test("Render component card container render all element 3 card", async () => {
    await waitFor(() => {
      expect(screen.getAllByTestId("card-character-content")).toHaveLength(3);
    });
  });
});
