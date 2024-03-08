import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useDebounce from "./useDebounce";

function useSearch() {
  const [searchParams, setSearchParems] = useSearchParams();
  const [isUserWrite, setIsUserWrite] = useState<boolean>(false);
  const seachValueParam = searchParams.get("search");
  const [searchValue, setSearchValue] = useState<string>(seachValueParam ?? "");

  const { debounnceValue } = useDebounce(searchValue, 500);

  useEffect(() => {
    if (isUserWrite) {
      setSearchParems({ ["search"]: debounnceValue });
      setIsUserWrite(false);
    }
  }, [debounnceValue]);

  useEffect(() => {
    if (seachValueParam === null) {
      if (searchValue !== "") setSearchValue("");
      searchParams.delete("search");
    }
  }, [seachValueParam]);

  const searchCharacters = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsUserWrite(true);
    setSearchValue(e.target.value);
  };

  return { searchValue, searchCharacters };
}

export default useSearch;
