import React from 'react'
import logo from '../assets/react.svg'
import { HStack, Image } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import DrawerExample from './DrawerExample'
import { Genre } from '../hooks/useGenres'


interface Props {
  onSelectedGenre: (genre: Genre) => void;
  styleSelectedGenre: Genre | null;
}
const NavBar = ({onSelectedGenre, styleSelectedGenre}: Props) => {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
      {/* <DrawerExample onSelectedGenreDrawerExample={onSelectedGenreNavBar} /> */}
      <DrawerExample
        onSelectedGenre={onSelectedGenre}
        styleSelectedGenre={styleSelectedGenre}

      />
      
      <Image src={logo} boxSize={"40px"} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar