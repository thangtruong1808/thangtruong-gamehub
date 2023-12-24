import { HStack, Stack, Image, List, ListItem, Text, Spinner, Button, useDisclosure, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageURL from '../services/image-url'

interface Props {
    onSelectedGenre: (genre: Genre) => void;
    styleSelectedGenre: Genre | null;
}
const GenreList = ({onSelectedGenre, styleSelectedGenre}: Props) => {
    const { data, isLoading, error } = useGenres()

    if (error) return <Text textAlign={'center'} textColor={'tomato'}>Loading Error . . . </Text>
    if (isLoading) return <Spinner />
  
  return (
      <List>
          {data.map(genre =>
              <ListItem key={genre.id} paddingY={'7px'}>
                <HStack>
                    <Image boxSize={'70px'}
                          borderRadius={'10px'}
                          src={getCroppedImageURL(genre.image_background)}
                            onClick={() => {
                            onSelectedGenre(genre);
                          }}  
                      />
                      <Button
                          fontWeight={genre.id === styleSelectedGenre?.id ? 'bold' : 'normal'}
                          colorScheme={genre.id === styleSelectedGenre?.id ? 'red': 'normal'}
                          fontSize={'lg'}
                          variant={'link'}
                          onClick={() => {
                              onSelectedGenre(genre);
                          }}   
                      >
                          {genre.name}
                      </Button>
                </HStack>
              </ListItem>
          )}
    </List>
  )
}

export default GenreList