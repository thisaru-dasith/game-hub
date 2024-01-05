import { useEffect, useState } from "react";
import ClinetApi from "../Services/Clinet-api";
import { Text } from "@chakra-ui/react";
import UseGame from "../Hooks/UseGame";

const GameGrid = () => {
  const { games, error } = UseGame();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
