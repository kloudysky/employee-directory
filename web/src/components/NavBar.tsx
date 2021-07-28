import { Box, Divider, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import { CreateEmployeeModal } from "./employee_directory/CreateEmployeeModal";
import { DarkModeSwitch } from "./DarkModeSwitch";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.60", dark: "gray.800" };

  const borderColor = { light: "gray.100", dark: "gray.900" };

  const color = { light: "black", dark: "white" };

  return (
    <Box
      bg={bgColor[colorMode]}
      p={4}
      m={"auto"}
      position={"fixed"}
      width="100%"
      borderBottomWidth="1px"
      borderColor={borderColor[colorMode]}
    >
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
