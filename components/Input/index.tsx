import { type TextInputProps } from "react-native";
import { type SpaceProps } from "styled-system";
import { getSize } from "../../utils";
import {
  Container,
  Label,
  RequiredLabel,
  Input as StyledInput,
} from "./styles";

interface Props {
  label: string;
  errorMessage?: string;
}

export function Input({
  label,
  errorMessage,
  ...props
}: TextInputProps & Props & SpaceProps) {
  return (
    <Container {...props}>
      <Label mb={getSize(10)}>{label}</Label>
      <StyledInput {...props} />
      {errorMessage && <RequiredLabel>{errorMessage}</RequiredLabel>}
    </Container>
  );
}
