import { type TouchableOpacityProps } from "react-native";
import { type SpaceProps } from "styled-system";
import { Container, Gradient, Button as StyledButton, Text } from "./styles";

interface Props {
  value: string;
}

export function Button({
  value,
  ...props
}: Props & TouchableOpacityProps & SpaceProps) {
  return (
    <StyledButton {...props}>
      <Container {...props}>
        <Gradient>
          <Text>{value}</Text>
        </Gradient>
      </Container>
    </StyledButton>
  );
}
