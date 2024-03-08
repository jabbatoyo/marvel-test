import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

//customHooks
import { ComicDto } from "../../../api";

//component
import ComicCards from "./ComicCards";

describe("COMICS test container", () => {
  const comics: ComicDto[] = [
    {
      id: 1,
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec",
        extension: "jpg",
      },
      title: "Capital Luzmildo",
    },
    {
      id: 1,
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec",
        extension: "jpg",
      },
      title: "Capital Marvel",
    },
  ];

  beforeEach(() => {
    render(
      <BrowserRouter>
        <ComicCards comics={comics} />
      </BrowserRouter>
    );
  });

  test("Render COMICS container", () => {
    expect(screen.getAllByTestId("comics-container")).toBeTruthy();
  });

  test("Check COMICS render the right amount of cards", () => {
    expect(screen.getAllByTestId("comics-card-content")).toHaveLength(2);
  });

  test("Check COMICS card has the correct title", () => {
    expect(screen.getByText("Capital Luzmildo")).toBeTruthy();
  });
});
