import { useLoaderData } from "react-router-dom";
//types
import { CharacterDto } from "../api";

function useCharacter() {
  const character = useLoaderData() as CharacterDto;
  return { character };
}

export default useCharacter;
