import logo from "../assets/react.svg";
import { Text, Container, HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";
import { Genre } from "../hooks/useGenres";
import SearchInput from "./SearchInput";
import GenreList from "./GenreList";

const MyNavBar = () => {
  return (
    <Container maxW="container.2xl" p={10}>
      <HStack padding={"10px"}>
        <Link to="/">
          <Image src={logo} boxSize={"50px"} />
        </Link>

        <Text
          fontFamily={"monospace"}
          fontSize={"30px"}
          fontStyle={"italic"}
          color="green.500"
        >
          AZGames
        </Text>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </Container>
  );
};

export default MyNavBar;
