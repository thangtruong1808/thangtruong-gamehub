import {
  HStack,
  Stack,
  Image,
  List,
  ListItem,
  Text,
  Spinner,
  Button,
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Center,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  styleSelectedGenre: Genre | null;
}
const GenreList = ({ onSelectedGenre, styleSelectedGenre }: Props) => {
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
      <Heading fontSize={"2xl"} marginBottom={3} textAlign={"center"}>
        Categories
      </Heading>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"7px"}>
          <HStack
            bgColor={genre.id === styleSelectedGenre?.id ? "grey" : "normal"}
            overflow={"hidden"}
          >
            <Image
              objectFit={"cover"}
              boxSize={"70px"}
              borderRadius={"10px"}
              src={getCroppedImageURL(genre.image_background)}
              onClick={() => {
                onSelectedGenre(genre);
              }}
            />
            <Button
              fontWeight={
                genre.id === styleSelectedGenre?.id ? "bold" : "normal"
              }
              colorScheme={
                genre.id === styleSelectedGenre?.id ? "red" : "normal"
              }
              fontSize={"lg"}
              variant={"link"}
              onClick={() => {
                onSelectedGenre(genre);
              }}
              whiteSpace={"normal"}
              textAlign={"left"}
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
