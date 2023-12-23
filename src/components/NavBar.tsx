import React from 'react'
import logo from '../assets/react.svg'
import { HStack, Image } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import DrawerExample from './DrawerExample'

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
      <DrawerExample  />
      <Image src={logo} boxSize={"40px"} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar