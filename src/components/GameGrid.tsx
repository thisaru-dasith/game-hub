import { useEffect, useState } from "react";
import ClinetApi from "../Services/Clinet-api";
import { SimpleGrid, Text } from "@chakra-ui/react";
import UseGame from "../Hooks/UseGame";
import GameGard from "./GameCard";

const GameGrid = () => {
  const { games, error } = UseGame();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {games.map((game) => (
          <GameGard key={game.id} game={game}></GameGard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
