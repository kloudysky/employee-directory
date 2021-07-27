import { Grid } from "@chakra-ui/layout";
import React from "react";
import { Container } from "../components/Container";
import { CreateEmployeeModal } from "../components/CreateEmployeeModal";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { EmployeeCard } from "../components/EmployeeCard";
import { NavBar } from "../components/NavBar";
import { useEmployeesQuery } from "../generated/graphql";

export interface IndexState {}

export const Index: React.FC<IndexState> = ({}) => {
  const { data, loading } = useEmployeesQuery();
  return (
    <>
      <NavBar />
      <Container height="100vh">
        <Grid mt={10} templateColumns="repeat(5, 1fr)" gap={6}>
          {!data
            ? null
            : data.employees.map((employee) => (
                <EmployeeCard
                  firstName={employee.firstName}
                  lastName={employee.lastName}
                />
              ))}
        </Grid>
      </Container>
    </>
  );
};

export default Index;
