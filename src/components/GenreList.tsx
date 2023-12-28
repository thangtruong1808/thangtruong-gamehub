import { useNavigate } from "react-router-dom";

import {
  HStack,
  Stack,
  Image,
  List,
  ListItem,
  Text,
  Spinner,
  Button,
  Center,
  Heading,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
} from "@chakra-ui/react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";
import useGameQueryStore from "./MyStore";

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  const { data, isLoading, error } = useGenres();
  const navigate = useNavigate();
  if (error)
    return (
      <Text textAlign={"center"} textColor={"tomato"}>
        Loading Error . . .{" "}
      </Text>
    );
  if (isLoading)
    return (
      <Center height={"150px"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="tomato"
          size="xl"
        />
      </Center>
    );
  return (
    <List>
      {/* <Heading fontSize={"30px"} marginBottom={3} textAlign={"left"} margin={5}>
        Genre
      </Heading> */}
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Heading
                fontSize={"20px"}
                // marginBottom={3}
                textAlign={"left"}
                // margin={5}
              >
                Genres
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            {data?.results.map((genre) => (
              <ListItem key={genre.id} paddingY={"7px"}>
                <HStack
                  overflow={"hidden"}
                  _hover={{
                    transform: "scale(1.03)",
                    transition: "transform .15s ease-in",
                  }}
                >
                  <Image
                    objectFit={"cover"}
                    boxSize={"50px"}
                    borderRadius={"10px"}
                    src={getCroppedImageURL(genre.image_background)}
                  />
                  <Button
                    fontSize={"lg"}
                    variant={"link"}
                    whiteSpace={"normal"}
                    textAlign={"left"}
                    fontWeight={
                      genre.id === selectedGenreId ? "bold" : "normal"
                    }
                    color={genre.id === selectedGenreId ? "tomato" : "normal"}
                    onClick={() => {
                      setSelectedGenreId(genre.id);
                      navigate("/");
                    }}
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {/* {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY={"7px"} marginX={5}>
          <HStack
            overflow={"hidden"}
            _hover={{
              transform: "scale(1.03)",
              transition: "transform .15s ease-in",
            }}
          >
            <Image
              objectFit={"cover"}
              boxSize={"70px"}
              borderRadius={"10px"}
              src={getCroppedImageURL(genre.image_background)}
            />
            <Button
              fontSize={"lg"}
              variant={"link"}
              whiteSpace={"normal"}
              textAlign={"left"}
              fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              color={genre.id === selectedGenreId ? "tomato" : "normal"}
              onClick={() => {
                setSelectedGenreId(genre.id);
                navigate("/");
              }}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))} */}
    </List>
  );
};

export default GenreList;
