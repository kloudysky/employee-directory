import { Flex, useColorMode } from "@chakra-ui/react";

export const Container = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.60", dark: "gray.800" };

  const color = { light: "black", dark: "white" };
  return (
    <Flex
      pt={20}
      overflow="scroll"
      direction="column"
      // justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};
