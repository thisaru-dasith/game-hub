import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../Hooks/UseGame";

interface Props {
  game: Game;
}

function GameGard({ game }: Props) {
  return (
    <>
      <Card radioGroup="10" overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Heading size="5*2">{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
}

export default GameGard;
