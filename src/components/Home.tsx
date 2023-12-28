import { Box, Flex, Grid, GridItem, Show, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import GenreList from "./GenreList";
import GameHeading from "./GameHeading";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import GameGrid from "./GameGrid";
const Home = () => {
  return (
    <>
      <Grid
        templateAreas={{
          // base: `"nav" "main" "footer"`,
          // lg: `"nav nav" "aside main" "footer footer"`,
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <Box fontSize={"20px"} fontWeight={"bold"} margin={5}>
              <Link to="/reviews">Reviews</Link>
            </Box>
            <Box fontSize={"20px"} fontWeight={"bold"} margin={5}>
              <Link to="/new_releases">New Releases</Link>
            </Box>
            <Box fontSize={"20px"} fontWeight={"bold"} margin={5}>
              <Link to="/top">Top</Link>
            </Box>
            <Box fontSize={"20px"} fontWeight={"bold"} margin={5}>
              <Link to="/allgames">All Games</Link>
            </Box>
            <Box fontSize={"20px"} fontWeight={"bold"} margin={5}>
              <Link to="/browse">Browse</Link>
            </Box>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector />
              </Box>
              <SortSelector />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
