import { Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { useCreateEmployeeMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorsMap";
import { FormModal } from "./FormModal";
import { InputField } from "./InputField";

interface CreateEmployeeModalProps {}

export const CreateEmployeeModal: React.FC<CreateEmployeeModalProps> = ({}) => {
  const [createEmployee] = useCreateEmployeeMutation();
  return (
    <FormModal
      title="Create an Employee"
      action="Submit"
      buttonName="Add Employee"
    >
      <Formik
        initialValues={{ firstName: "", lastName: "", title: "", photoUrl: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await createEmployee({ variables: values });
          if (response.data?.createEmployee.errors) {
            setErrors(toErrorMap(response.data.createEmployee.errors));
          }
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
