import React from 'react'
import logo from '../assets/react.svg'
import { Text, Container, HStack, Image } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import DrawerExample from './DrawerExample'
import { Genre } from '../hooks/useGenres'
import SearchInput from './SearchInput'


interface Props {
  onSelectedGenre: (genre: Genre) => void;
  styleSelectedGenre: Genre | null;
}
const NavBar = ({onSelectedGenre, styleSelectedGenre}: Props) => {
  return (
    <Container maxW='container.2xl'p={10}>
    <HStack  padding={'10px'}>
      {/* <DrawerExample onSelectedGenreDrawerExample={onSelectedGenreNavBar} /> */}
        <DrawerExample
        onSelectedGenre={onSelectedGenre}
        styleSelectedGenre={styleSelectedGenre}

        />
      {/* <Image src={logo} boxSize={"40px"} /> */}
        <Text
          fontFamily={'monospace'}
          fontSize={'30px'}
          fontStyle={'italic'}
          color={'red.500'}
        >AZGames</Text>  
        <SearchInput />
      <ColorModeSwitch />
      </HStack>
    </Container>
  )
}

export default NavBar