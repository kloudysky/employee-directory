import { Box, Grid } from "@chakra-ui/layout";
import React from "react";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

const Index = () => (
  <Container height="100vh">
    <Grid mt={10} templateColumns="repeat(5, 1fr)" gap={6}>
      <Box
        maxW="lg"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        h="100"
      >
        Employee
      </Box>
      <Box
        maxW="lg"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        h="100"
      >
        Employee
      </Box>
    </Grid>
    <DarkModeSwitch />
  </Container>
);

export default Index;
