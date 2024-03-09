//customHooks
import useCharacters from "../../hooks/useCharacters";
//components
import { Card } from "..";
//types
import { CharacterDto } from "../../api";
//styles
import { Container } from "./cardContainer.styles";

const CardContainer = () => {
  const { characters } = useCharacters();
  return (
    <Container data-testid="card-container">
      {characters?.map((character: CharacterDto) => {
        return <Card key={character.id} character={character} />;
      })}
    </Container>
  );
};

export default CardContainer;
