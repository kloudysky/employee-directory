import { Grid } from "@chakra-ui/react";
import React from "react";
import { EmployeeCard } from "./EmployeeCard";

interface DirectoryProps {
  employees: any[];
}

export const Directory: React.FC<DirectoryProps> = ({ employees }) => {
  return (
    <Grid mt={10} templateColumns="repeat(5, 1fr)" gap={6}>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </Grid>
  );
};
