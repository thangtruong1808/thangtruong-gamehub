import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="red"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace={"nowrap"}>
        <span>{colorMode === "dark" ? "Dark Theme" : "White Theme"}</span>
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
