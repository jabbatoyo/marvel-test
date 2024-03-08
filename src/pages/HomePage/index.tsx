//hooks
import useCharacters from "../../hooks/useCharacters";

//components
import { CardContainer } from "../../components";

//styles
import { Container } from "./home.styles";

const HomePage = () => {
  const { totalResults } = useCharacters();

  return (
    <Container>
      <h3 className="results-text">{totalResults} RESULTS</h3>
      <CardContainer />
    </Container>
  );
};

export default HomePage;
