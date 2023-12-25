import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Grid,
  GridItem,
  Show,
  Container,
  VStack,
  HStack,
  Box,
} from "@chakra-ui/react";
import NavBar from "./NavBar";
import "../App.css";
import GameGrid from "./GameGrid";
import GenreList from "./GenreList";

import { Genre } from "../hooks/useGenres";
import DrawerExample from "./DrawerExample";
import Footer from "./Footer";
import PlatformSelector from "./PlatformSelector";
import { Platform } from "../hooks/useGames";
import SortSelector from "./SortSelector";
import GameHeading from "./GameHeading";
import Homepage from "./Home";
import Reviewpage from "./Review";
import NewReleasespage from "./NewReleases";
import AllGamespage from "./AllGames";
import Browsespage from "./Browse";
import React from "react";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string | null;
  searchText: string | null;
}
const Layout = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const handleOnSelectedGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };
  return (
    <>
      <VStack>
        <Container maxW="container.2xl">
          <Grid
            templateAreas={{
              base: `"nav" "main" "footer"`,
              lg: `"nav nav" "aside main" "footer footer"`,
            }}
            templateColumns={{
              base: "1fr",
              lg: "250px 1fr",
            }}
          >
            {/* NavBar */}
            <GridItem area={"nav"}>
              <NavBar
                onSearch={(searchText) => {
                  setGameQuery({ ...gameQuery, searchText });
                }}
              />
            </GridItem>
            {/* END NavBar */}

            {/* SideBar */}

            <Show above="lg">
              <GridItem area={"aside"}>
                <Homepage />
                {/* <Reviewpage /> */}
                <Box fontSize={"30px"} fontWeight={"bold"} margin={5}>
                  <Link to="/reviews">Reviews</Link>
                </Box>

                <NewReleasespage />
                <AllGamespage />
                <Browsespage />

                <GenreList
                  onSelectedGenre={(genre) => {
                    setGameQuery({ ...gameQuery, genre });
                  }}
                />
              </GridItem>
            </Show>
            {/* END SideBar */}

            {/* Main area */}
            <GridItem area={"main"}>
              <Box paddingLeft={2}>
                <GameHeading gameQuery={gameQuery} />
                <HStack spacing={5} marginBottom={5}>
                  <PlatformSelector
                    onSelectedPlatform={(platform) => {
                      setGameQuery({ ...gameQuery, platform });
                    }}
                    selectedPlatform={gameQuery.platform}
                  />
                  <SortSelector
                    onSelectedSortOrder={(sortOrder) =>
                      setGameQuery({ ...gameQuery, sortOrder })
                    }
                    sortOrder={gameQuery.sortOrder}
                  />
                </HStack>
              </Box>
              <GameGrid gameQuery={gameQuery} />
            </GridItem>
            {/* END Main area */}

            {/* Footer */}
            <GridItem area={"footer"}>
              <Footer />
            </GridItem>
            {/* END Footer */}
          </Grid>
        </Container>
      </VStack>

      <Outlet />
    </>
  );
};

export default Layout;
