import React from "react";
import logo from "../assets/react.svg";
import { Text, Container, HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { Genre } from "../hooks/useGenres";
import SearchInput from "./SearchInput";
import GenreList from "./GenreList";

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <Container maxW="container.2xl" p={10}>
      <HStack padding={"10px"}>
        {/* <DrawerExample
          onSelectedGenre={onSelectedGenre}
          styleSelectedGenre={styleSelectedGenre}
        /> */}
        <Image src={logo} boxSize={"40px"} />
        <Text
          fontFamily={"monospace"}
          fontSize={"30px"}
          fontStyle={"italic"}
          color="green.500"
        >
          AZGames
        </Text>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </Container>
  );
};

export default NavBar;
