import {
  HStack,
  Switch,
  Text,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      {/* <HStack>
        <Switch
          colorScheme="red"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <Text whiteSpace={"nowrap"}>
          <span>{colorMode === "dark" ? "Theme" : "Theme"}</span>
        </Text>
      </HStack> */}
      <IconButton
        aria-label="toggle theme"
        rounded="full"
        size="md"
        onClick={toggleColorMode}
        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
      ></IconButton>
    </>
  );
};

export default ColorModeSwitch;
