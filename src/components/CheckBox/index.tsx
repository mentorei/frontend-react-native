import { type CheckboxProps } from "expo-checkbox";
import { type SpaceProps } from "styled-system";
import { Container, Checkbox as StyledCheckbox, Text } from "./styles";

interface Props {
  label: string;
}

export function CheckBox({
  label,
  ...props
}: CheckboxProps & Props & SpaceProps) {
  return (
    <Container {...props}>
      <StyledCheckbox {...props} />
      <Text>{label}</Text>
    </Container>
  );
}
