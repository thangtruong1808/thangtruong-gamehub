import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Input,
  Menu,
  MenuButton,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import React, { useState } from "react";
import GenreList from "./GenreList";

const DrawerExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        DrawerExample
      </Button> */}
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon boxSize={"34px"}/>}
          // variant="outline"
          size ="lg"
          onClick={onOpen}
          
          
        />
      </Menu>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size={"sm"}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            textAlign={'center'}
            fontSize={'3xl'}
            textTransform={'capitalize'}
          >
            Categories</DrawerHeader>
          <Divider />
          <DrawerBody>
            <GenreList />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerExample;
