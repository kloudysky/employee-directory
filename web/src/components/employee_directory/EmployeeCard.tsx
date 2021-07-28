import {
  Box,
  Flex,
  Text,
  useDisclosure,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { FormModal } from "../FormModal";
import { InputField } from "../InputField";

interface EmployeeCardProps {
  employee;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id, firstName, lastName, title, department, state, photoUrl } =
    employee;

  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.60", dark: "gray.800" };

  const borderColor = { light: "gray.300", dark: "gray.600" };

  const color = { light: "black", dark: "white" };

  return (
    <Box
      bgColor={bgColor[colorMode]}
      borderColor={borderColor[colorMode]}
      maxW="225px"
      borderWidth="1px"
      borderRadius="md"
      height="430px"
      onClick={onOpen}
      cursor={"pointer"}
    >
      <Image src={photoUrl} />
      <Flex p={15} flexDirection="column">
        <Text>First Name: {firstName}</Text>
        <Text>Last Name: {lastName}</Text>
        <Text>Title: {title}</Text>
        <Text>Department: {department}</Text>
        <Text>Location: {state}</Text>
        <FormModal
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          title="Update Employee Details"
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
