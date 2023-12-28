import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import Platform from "../entities/Platform";

import { Text, Icon, HStack } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

const PlatformIconsList = ({ platforms }: Props) => {
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
  };
  return (
    <>
      <HStack marginY={"10px"}>
        {platforms.map((platform) => (
          <Icon as={iconMap[platform.slug]} color="grey" key={platform.id} />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconsList;
