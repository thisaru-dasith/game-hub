import { useEffect, useState } from "react";
import ClinetApi from "../Services/Clinet-api";
import { SimpleGrid, Text } from "@chakra-ui/react";
import UseGame from "../Hooks/UseGame";
import GameGard from "./GameCard";
import GameCardSkelaton from "./GameCardSkelaton";

const GameGrid = () => {
  const { games, error, isLoading } = UseGame();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkelaton key={skeleton} />)}
        {games.map((game) => (
          <GameGard key={game.id} game={game}></GameGard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
