import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  useColorMode,
} from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";
import { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);

  const { colorMode } = useColorMode();

  const color = { light: "black", dark: "white" };

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel color={color[colorMode]} htmlFor={field.name}>
        {label}
      </FormLabel>
      <Input
        {...field}
        {...props}
        id={field.name}
        placeholder={props.placeholder}
      />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
