import reactLogo from "./assets/react.svg";
import { Grid, GridItem, Show, Container, VStack, Text, Divider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import DrawerExample from "./components/DrawerExample";
import Footer from "./components/Footer";


function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)  
  
  const handleOnSelectedGenre = (genre: Genre) => {
    setSelectedGenre(genre)
    console.log(genre)
  }
  return (
    <VStack>
      <Container maxW="container.2xl">
        <Grid
          templateAreas={{
            base: `"nav" "main" "footer"`,
            lg: `"nav " "main" "footer"`,
          }}
          templateColumns={{
            base: '1fr',
            lg: '1fr'
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
            <GameGrid selectedGenre={selectedGenre}/>
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
