import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import { CreateEmployeeModal } from "./CreateEmployeeModal";
import { DarkModeSwitch } from "./DarkModeSwitch";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.500", dark: "gray.900" };

  const color = { light: "black", dark: "white" };

  return (
    <Box bg={bgColor[colorMode]} p={4} m={"auto"}>
      <Flex
        direction="column"
        alignItems="center"
        // justifyContent="flex-start"
        color={color[colorMode]}
      >
        <CreateEmployeeModal />
        <DarkModeSwitch />
      </Flex>
    </Box>
  );
};
