import { Grid } from "@chakra-ui/layout";
import React from "react";
import { Container } from "../components/Container";
import { CreateEmployeeModal } from "../components/CreateEmployeeModal";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { EmployeeCard } from "../components/EmployeeCard";

export interface IndexState {}

class Index extends React.Component<IndexState> {
  render() {
    return (
      <Container height="100vh">
        <CreateEmployeeModal />
        <Grid mt={10} templateColumns="repeat(5, 1fr)" gap={6}>
          <EmployeeCard firstName="kloud" lastName="strife" />
        </Grid>
        <DarkModeSwitch />
      </Container>
    );
  }
}

export default Index;
