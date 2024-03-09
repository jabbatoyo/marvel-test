//customHooks
import useSearch from "../../hooks/useSearch";
//components
import SearchIcon from "../Icons/SearchIcon";
//styles
import { Container } from "./search.styles";

const Search = () => {
  const { searchCharacters, searchValue } = useSearch();

  return (
    <Container data-testid="search-container">
      <SearchIcon />
      <input
        onChange={searchCharacters}
        value={searchValue}
        placeholder="Search a character..."
      />
    </Container>
  );
};

export default Search;
