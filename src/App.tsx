import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav " " sidebar main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"sidebar"} bg={"yellow"}>
            Sidebar
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={"blue"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
