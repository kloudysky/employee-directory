import { Grid } from "@chakra-ui/layout";
import React from "react";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { EmployeeCard } from "../components/EmployeeCard";

const Index = () => (
  <Container height="100vh">
    <Grid mt={10} templateColumns="repeat(5, 1fr)" gap={6}>
      <EmployeeCard firstName="kloud" lastName="strife" />
    </Grid>
    <DarkModeSwitch />
  </Container>
);

export default Index;
