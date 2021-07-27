import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { FormModal } from "./FormModal";
import { InputField } from "./InputField";

interface EmployeeCardProps {
  employee;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const { firstName, lastName, title, department, state, photoUrl } = employee;
  return (
    <Box
      maxW="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      h="200"
    >
      <Flex p={15} flexDirection="column">
        <Text>First Name: {firstName}</Text>
        <Text>Last Name: {lastName}</Text>
        <Text>Title: {title}</Text>
        <Text>Department: {department}</Text>
        <Text>Location: {state}</Text>
        <FormModal title="Update Employee Details" buttonName="Update">
          <Formik
            initialValues={{ firstName, lastName }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values, handleChange }) => (
              <Form>
                <InputField
                  name="firstName"
                  placeholder="First Name"
                  label="First Name"
                />
              </Form>
            )}
          </Formik>
        </FormModal>
      </Flex>
    </Box>
  );
};
