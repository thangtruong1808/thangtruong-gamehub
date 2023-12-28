import React from "react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import Platform from "../entities/Platform";

interface Props {
  platforms: Platform[];
}
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Box, Grid, GridItem, Link, Show, SimpleGrid } from "@chakra-ui/react";
import GenreList from "./GenreList";
import GameHeading from "./GameHeading";
import usePlatforms from "../hooks/usePlatforms";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import PlatformCard from "./PlatformCard";

const DisplayPlatforms = () => {
  const { isLoading, data, error } = usePlatforms();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        padding={"10px"}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {/* {data?.results.map((platform) => (
          <PlatformCard platform={platform}></PlatformCard>
        ))} */}
        <PlatformCard platforms={data?.results} />
      </SimpleGrid>
    </>
  );
};

export default DisplayPlatforms;
