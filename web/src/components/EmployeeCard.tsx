import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { FormModal } from "./FormModal";

interface EmployeeCardProps {}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({}) => {
  return (
    <Box
      maxW="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      h="100"
    >
      Employee
      <FormModal>
        <Formik
          initialValues={{ firstName: "", lastName: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, handleChange }) => (
            <Form>
              <div>Hello World</div>
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
