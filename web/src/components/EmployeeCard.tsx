import {
  Box,
  Button,
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
  firstName: string;
  lastName: string;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({
  firstName,
  lastName,
}) => {
  return (
    <Box
      maxW="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      h="100"
    >
      <Text>{firstName}</Text>
      <Text>{lastName}</Text>
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
    </Box>
  );
};
