import { Container } from "./cardContainer.styles";
import { Card } from "..";
import { CharacterDto } from "../../api";
import useCharacters from "../../hooks/useCharacters";

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
