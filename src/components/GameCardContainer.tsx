import { Box } from "@chakra-ui/react";
import { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <>
      <Box width="300px" radioGroup="10" overflow="hidden">
        {children}
      </Box>
    </>
  );
}

export default GameCardContainer;
