import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../Hooks/UseGame";
import PlatFromIconList from "./PlatFormIconList";

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
          <PlatFromIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatFromIconList>
        </CardBody>
      </Card>
    </>
  );
}

export default GameGard;
