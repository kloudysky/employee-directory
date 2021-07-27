import React, { useEffect, useState } from "react";
import { Container } from "../components/Container";
import { Directory } from "../components/employee_directory/Directory";
import { NavBar } from "../components/NavBar";
import { useEmployeesQuery } from "../generated/graphql";

export const Index: React.FC = () => {
  const { data, loading } = useEmployeesQuery();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      setEmployees(data.employees);
    }
  }, [loading, data]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <NavBar />
      <Container height="100vh">
        <Directory employees={employees as []} />
      </Container>
    </>
  );
};

export default Index;
