import { Grid, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { EmployeeCard } from "./EmployeeCard";

interface DirectoryProps {
  employees: any[];
}

export const Directory: React.FC<DirectoryProps> = ({ employees }) => {
  return (
    <SimpleGrid p={10} minChildWidth="200px" spacing="10px">
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </SimpleGrid>
  );
};
