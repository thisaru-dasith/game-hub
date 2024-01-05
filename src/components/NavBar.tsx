import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeScript from "./ColorModeSwitch";

function NavBar() {
  return (
    <>
      <HStack justifyContent={"space-between"} padding="10px">
        <Image src={logo} boxSize="60px" />
        <ColorModeScript></ColorModeScript>
      </HStack>
    </>
  );
}

export default NavBar;
