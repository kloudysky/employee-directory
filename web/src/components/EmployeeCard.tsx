import { Box, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { FormModal } from "./FormModal";

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
      <FormModal
        title="Update Employee Details"
        action="Update"
        buttonName="Update"
      >
        <Formik
          initialValues={{ firstName, lastName }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, handleChange }) => (
            <Form>
              <FormControl>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Input
                  value={values.firstName}
                  onChange={handleChange}
                  id="firstName"
                  placeholder="First Name"
                />
                {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
              </FormControl>
            </Form>
          )}
        </Formik>
      </FormModal>
    </Box>
  );
};
