import React from 'react'
import logo from '../assets/react.svg'
import { HStack, Image, Text } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <HStack>
          <Image src={logo} boxSize={"60px"}/>
          <Text>Logo</Text>
    </HStack>
  )
}

export default NavBar