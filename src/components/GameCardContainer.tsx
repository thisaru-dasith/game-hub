import { Box } from "@chakra-ui/react";
import { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <>
      <Box radioGroup="10">{children}</Box>
    </>
  );
}

export default GameCardContainer;
