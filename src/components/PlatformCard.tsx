import React from "react";
import {
  Box,
  Card,
  CardBody,
  Center,
  Divider,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { FaNeos } from "react-icons/fa6";
import { SiAtari, SiCommodore, SiSega, SiWeb3Dotjs } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import Platform from "../entities/Platform";
import { Padding } from "@mui/icons-material";

interface Props {
  platforms: Platform[];
}
const PlatformCard = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    atari: SiAtari,
    commodore_amiga: SiCommodore,
    sega: SiSega,
    threeDO: SiWeb3Dotjs,
    neo_geo: FaNeos,
  };
  return (
    <>
      {/* <Card marginX={5}>
        <Image src={platform.slug} />
        <CardBody>{platform.name}</CardBody>
      </Card> */}

      {platforms.map((platform) => (
        <Card
          marginX={"15px"}
          variant={"elevated"}
          _hover={{
            transform: "scale(1.10)",
            transition: "transform .25s ease-in",
          }}
        >
          <Center>
            <Icon
              as={iconMap[platform.slug]}
              key={platform.id}
              boxSize={"50%"}
              //   marginTop={"25px"}
            />
          </Center>
          <Divider />
          <CardBody textAlign={"center"}>
            <Text fontSize={"25px"}>{platform.name}</Text>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default PlatformCard;
