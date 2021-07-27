import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

interface FormModalProps {
  title: string;
  buttonName: string;
  isOpen;
  onOpen;
  onClose;
}

export const FormModal: React.FC<FormModalProps> = ({
  children,
  buttonName,
  title,
  isOpen,
  onOpen,
  onClose,
}) => {
  const { colorMode } = useColorMode();

  const color = { light: "black", dark: "white" };

  return (
    <>
      <Button onClick={onOpen}>{buttonName}</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={color[colorMode]}>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
