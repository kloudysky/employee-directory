import { useMutation } from "@apollo/client";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { FormModal } from "./FormModal";
import { InputField } from "./InputField";

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
            <InputField
              name="firstName"
              placeholder="First Name"
              label="First Name"
            />
            <InputField
              name="lastName"
              placeholder="Last Name"
              label="Last Name"
            />
            <InputField name="title" placeholder="Title" label="Title" />
            <InputField
              name="photoUrl"
              placeholder="Photo URL"
              label="Photo URL"
            />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </FormModal>
  );
};
