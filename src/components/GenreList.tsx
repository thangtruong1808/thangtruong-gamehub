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
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";
import useGameQueryStore from "./MyStore";

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  const { data, isLoading, error } = useGenres();

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
      <Heading fontSize={"30px"} marginBottom={3} textAlign={"left"} margin={5}>
        Genre
      </Heading>
      {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY={"7px"} marginX={5}>
          <HStack
            overflow={"hidden"}
            onClick={() => {
              setSelectedGenreId(genre.id);
            }}
          >
            <Image
              objectFit={"cover"}
              boxSize={"70px"}
              borderRadius={"10px"}
              src={getCroppedImageURL(genre.image_background)}
              // onClick={() => {
              //   setSelectedGenreId(genre.id);
              // }}
            />
            <Button
              fontSize={"lg"}
              variant={"link"}
              whiteSpace={"normal"}
              textAlign={"left"}
              // onClick={() => {
              //   setSelectedGenreId(genre.id);
              // }}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
