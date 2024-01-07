import { Text } from "@chakra-ui/react";
import UseGenre from "../Hooks/UseGenre";

function GenreList() {
  const { genres, error } = UseGenre();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GenreList;
