import { Button, useDisclosure } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { useCreateEmployeeMutation } from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorsMap";
import { FormModal } from "../FormModal";
import { InputField } from "../InputField";

interface CreateEmployeeModalProps {}

export const CreateEmployeeModal: React.FC<CreateEmployeeModalProps> = ({}) => {
  const [createEmployee] = useCreateEmployeeMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <FormModal
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      title="Create an Employee"
      buttonName="Add Employee"
    >
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          title: "",
          photoUrl: "",
          department: "",
          state: "",
        }}
        onSubmit={async (values, { setErrors }) => {
          const response = await createEmployee({ variables: values });
          if (response.data?.createEmployee.errors) {
            setErrors(toErrorMap(response.data.createEmployee.errors));
          } else if (response.data?.createEmployee.employee) {
            onClose();
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
              name="department"
              placeholder="Department"
              label="Department"
            />
            <InputField name="state" placeholder="State" label="State" />
            <InputField
              name="photoUrl"
              placeholder="Photo URL"
              label="Photo URL"
            />
            <Button mt={5} mb={5} type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </FormModal>
  );
};
