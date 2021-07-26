import { gql, useMutation } from "@apollo/client";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { FormModal } from "./FormModal";
import { InputField } from "./InputField";

interface CreateEmployeeModalProps {}

const CREATE_EMP_MUT = gql`
  mutation CreateEmployee(
    $firstName: String!
    $lastName: String!
    $title: String!
    $photoUrl: String!
  ) {
    createEmployee(
      options: {
        firstName: $firstName
        lastName: $lastName
        title: $title
        photoUrl: $photoUrl
      }
    ) {
      errors {
        field
        message
      }
      employee {
        id
        firstName
        lastName
        title
        photoUrl
      }
    }
  }
`;

export const CreateEmployeeModal: React.FC<CreateEmployeeModalProps> = ({}) => {
  const [, createEmployee] = useMutation(CREATE_EMP_MUT);
  return (
    <FormModal
      title="Create an Employee"
      action="Submit"
      buttonName="Add Employee"
    >
      <Formik
        initialValues={{ firstName: "", lastName: "", title: "", photoUrl: "" }}
        onSubmit={(values) => {
          console.log(values);
          // return createEmployee(values);
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
