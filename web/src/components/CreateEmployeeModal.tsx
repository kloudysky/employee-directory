import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { FormModal } from "./FormModal";

interface CreateEmployeeModalProps {}

export const CreateEmployeeModal: React.FC<CreateEmployeeModalProps> = ({}) => {
  return (
    <FormModal
      title="Create an Employee"
      action="Submit"
      buttonName="Add Employee"
    >
      <Formik
        initialValues={{ firstName: "", lastName: "" }}
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
  );
};
