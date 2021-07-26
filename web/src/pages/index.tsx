import { Box, Grid } from "@chakra-ui/layout";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  transition,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { EmployeeCard } from "../components/EmployeeCard";
import { FormModal } from "../components/FormModal";

const Index = () => (
  <Container height="100vh">
    <Grid mt={10} templateColumns="repeat(5, 1fr)" gap={6}>
      <EmployeeCard />
    </Grid>
    <DarkModeSwitch />
  </Container>
);

export default Index;
