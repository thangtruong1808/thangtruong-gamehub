import reactLogo from "./assets/react.svg";
import {
  Grid,
  GridItem,
  Show,
  Container,
  VStack,
  Text,
  Divider,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import DrawerExample from "./components/DrawerExample";
import Footer from "./components/Footer";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  const handleOnSelectedGenre = (genre: Genre) => {
    setSelectedGenre(genre);
  };
  return (
    <VStack>
      <Container maxW="container.2xl">
        <Grid
          templateAreas={{
            base: `"nav" "main" "footer"`,
            lg: `"nav " "main" "footer"`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "1fr",
          }}
        >
          <GridItem area={"nav"}>
            {/* <NavBar onSelectedGenreNavBar={(genre) => setSelectedGenre(genre)} /> */}
            <NavBar
              onSelectedGenre={handleOnSelectedGenre}
              styleSelectedGenre={selectedGenre}
            />
          </GridItem>
          <GridItem area={"main"}>
            {/* {selectedPlatform?.name + " Genre:" + selectedGenre?.name} */}
            <PlatformSelector
              onSelectedPlatform={(platform) => {
                setSelectedPlatform(platform);
              }}
              selectedPlatform={selectedPlatform}
            />
            <GameGrid
              selectedGenre={selectedGenre}
              selectedPlatform={selectedPlatform}
            />
          </GridItem>

          <GridItem>
            <Footer />
          </GridItem>
          {/* <Show above="lg">
            <GridItem area={"aside"}>
              <GenreList /> 
              <Text
                textAlign={'center'}
                fontSize={'xl'}
                textTransform={'capitalize'}
              >Latest Release</Text>
              <Divider />
            </GridItem>
          </Show> */}
        </Grid>
      </Container>
    </VStack>
  );
}

export default App;
