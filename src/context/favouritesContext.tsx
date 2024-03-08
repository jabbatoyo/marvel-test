import { ReactNode, createContext, useContext, useState } from "react";
import { FavouritesDto } from "../api";

type AppContextProviderProps = {
  children: ReactNode;
};

type FavouriteContextType = {
  favourites: number[];
  numberOfFavourites: number;
  addFavourites: (id: number) => void;
  removeFavourites: (id: number) => void;
};

const FavouriteContext = createContext<FavouriteContextType>({
  favourites: [],
  numberOfFavourites: 0,
  addFavourites: () => {},
  removeFavourites: () => {},
});

export function FavouriteProvider({ children }: AppContextProviderProps) {
  const favoritesLocalStorage = localStorage.getItem("favourites")
    ? JSON.parse(localStorage.getItem("favourites") as any)
    : [];
  const [favourites, setFavorites] = useState<FavouritesDto>(
    favoritesLocalStorage
  );

  const addFavourites = (id: number) => {
    localStorage.setItem("favourites", JSON.stringify([...favourites, id]));
    setFavorites([...favourites, id]);
  };

  const removeFavourites = (id: number) => {
    const resFavourites = favourites.filter((element) => element !== id);
    localStorage.setItem("favourites", JSON.stringify(resFavourites));
    setFavorites(resFavourites);
  };

  return (
    <FavouriteContext.Provider
      value={{
        favourites,
        numberOfFavourites: favourites.length,
        addFavourites,
        removeFavourites,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}

export function useFavouriteContext() {
  const context = useContext(FavouriteContext) as FavouriteContextType;
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }

  const { favourites, numberOfFavourites, addFavourites, removeFavourites } =
    context;
  return {
    favourites,
    numberOfFavourites,
    addFavourites,
    removeFavourites,
  };
}
