import reactLogo from "./assets/react.svg";
import { Grid, GridItem, Show, Container, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <VStack>
      <Container maxW="container.xl">
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
        >
          <GridItem area={"nav"}>
            <NavBar />
          </GridItem>
          <Show above="lg">
            <GridItem area={"aside"}>
            <GenreList />
            </GridItem>
          </Show>
          <GridItem area={"main"}>
            <GameGrid />
          </GridItem>
        </Grid>
      </Container>
    </VStack>

  );
}

export default App;
