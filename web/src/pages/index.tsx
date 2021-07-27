import { Grid } from "@chakra-ui/layout";
import React from "react";
import { Container } from "../components/Container";
import { CreateEmployeeModal } from "../components/CreateEmployeeModal";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { EmployeeCard } from "../components/EmployeeCard";
import { NavBar } from "../components/NavBar";

export interface IndexState {}

class Index extends React.Component<IndexState> {
  render() {
    return (
      <>
        <NavBar />
        <Container height="100vh">
          <Grid mt={10} templateColumns="repeat(5, 1fr)" gap={6}>
            <EmployeeCard firstName="kloud" lastName="strife" />
          </Grid>
        </Container>
      </>
    );
  }
}

export default Index;
