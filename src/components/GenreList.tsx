import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import UseGenre, { Genre } from "../Hooks/UseGenre";

interface Prop {
  onSelectGenre: (genre: Genre) => void;
  selecetedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selecetedGenre }: Prop) {
  const { genres, error, isLoading } = UseGenre();

  if (error) return null;
  if (isLoading) return <Spinner />;

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
              <Button
                variant="link"
                fontWeight={genre.id == selecetedGenre?.id ? "bold" : "normal"}
                onClick={() => {
                  onSelectGenre(genre);
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
