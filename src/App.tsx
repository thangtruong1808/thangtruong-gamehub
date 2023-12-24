import reactLogo from "./assets/react.svg";
import { Grid, GridItem, Show, Container, VStack, Text, Divider } from "@chakra-ui/react";
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
            lg: `"nav nav" "main aside"`,
          }}
          templateColumns={{
            base: '1fr',
            lg: '1fr 200px'
          }}
        >
          <GridItem area={"nav"}>
            <NavBar />
          </GridItem>
          
          <Show above="lg">
            <GridItem area={"aside"}>
              {/* <GenreList />  */}
              <Text
                textAlign={'center'}
                fontSize={'xl'}
                textTransform={'capitalize'}
              >Latest Release</Text>
              <Divider />
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
