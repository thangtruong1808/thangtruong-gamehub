import React from "react";
import {
  Container,
  Divider,
  Link,
  HStack,
  Text,
  Box,
  List,
  ListItem,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { FaSquareFacebook, FaLinkedin, FaUserGraduate } from "react-icons/fa6";
import { FaMale } from "react-icons/fa";

import logo from "../assets/react.svg";

const Footer = () => (
  <Container maxW="container.2xl" p={10}>
    <Divider />
    <HStack padding={"10px"} justifyContent={"space-around"}>
      {/* Information Section     */}
      <Box display={"flex"} flexDirection={"column"} fontFamily={"monospace"}>
        <Text
          fontSize={"22px"}
          textTransform={"uppercase"}
          fontWeight={"bold"}
          color={"tomato"}
        >
          {" "}
          Information
        </Text>
        <HStack>
          <FaUserGraduate size={"26px"} color="#4267B2" />
          <Text fontSize={"16px"} textTransform={"capitalize"}>
            {" "}
            Thang Truong
          </Text>
        </HStack>
        <HStack>
          <EmailIcon boxSize={"30px"} color="#4267B2" />
          <Text fontSize={"16px"}>thangtruong1808@gmail.com</Text>
        </HStack>
        <HStack>
          <Link href="https://www.facebook.com/profile.php?id=100051753410222">
            <FaSquareFacebook size={"30px"} color="#4267B2" />
          </Link>
          <Text fontSize={"16px"} textTransform={"capitalize"}>
            {" "}
            Facebook
          </Text>
        </HStack>
        <HStack mt={"5px"}>
          <Link href="https://www.linkedin.com/in/thang-truong-00b245200/">
            <FaLinkedin size={"30px"} color="#4267B2" />
          </Link>
          <Text fontSize={"16px"} textTransform={"capitalize"}>
            {" "}
            Linkedin
          </Text>
        </HStack>
      </Box>

      {/* Technologies Section     */}
      <Box display={"flex"} flexDirection={"column"} fontFamily={"monospace"}>
        <Text
          fontSize={"22px"}
          textTransform={"uppercase"}
          fontWeight={"bold"}
          color={"tomato"}
        >
          {" "}
          Technologies
        </Text>
        <Text fontSize={"16px"} textTransform={"capitalize"}>
          {" "}
          Vite
        </Text>
        <Text fontSize={"16px"} textTransform={"capitalize"}>
          {" "}
          ReactJS 18
        </Text>
        <Text fontSize={"16px"}>TypeScript</Text>
        <Text fontSize={"16px"}>API: RAWG</Text>
      </Box>

      {/* Features Section     */}
      <Box display={"flex"} flexDirection={"column"} fontFamily={"monospace"}>
        <Text
          fontSize={"22px"}
          textTransform={"uppercase"}
          fontWeight={"bold"}
          color={"tomato"}
        >
          {" "}
          Features in used
        </Text>
        <Box fontSize={"16px"} textTransform={"capitalize"}>
          <ul>
            <li>Search a game</li>
            <li>Add a new game</li>
            <li>Display all games</li>
            <li>Display platform Icons</li>
            <li>Display score</li>
          </ul>
        </Box>
      </Box>
      <Box fontSize={"16px"} textTransform={"capitalize"}>
        <ul>
          <br></br>
          <li>Display detail a single games</li>
          <li>Display all categories by drawer</li>
          <li>Filter with by a category </li>
          <li>Filter with by a platform </li>
          <li>Filter games by a platform </li>
        </ul>
      </Box>
    </HStack>
  </Container>
);

export default Footer;
