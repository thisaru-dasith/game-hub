import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import UseGenre from "../Hooks/UseGenre";

function GenreList() {
  const { genres, error } = UseGenre();
  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={genre.image_background}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
