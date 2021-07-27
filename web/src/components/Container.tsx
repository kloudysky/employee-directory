import { Flex, useColorMode } from "@chakra-ui/react";

export const Container = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.700" };

  const color = { light: "black", dark: "white" };
  return (
    <Flex
      overflow="scroll"
      direction="column"
      // justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};
