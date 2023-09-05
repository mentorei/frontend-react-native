import styled from "styled-components/native";
import { space } from "styled-system";
import { getSize } from "../../utils";

import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  width: ${getSize(315)};
  align-self: center;
  ${space}
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ["#FFAC38", "#FFD700"],
})`
  width: 100%;
  height: ${getSize(60)};
  justify-content: center;
  align-items: center;
  border-radius: ${getSize(5)};
`;

export const Button = styled.TouchableOpacity``;

export const Text = styled.Text`
  color: #fff;
  text-align: center;
  font-size: ${getSize(26)};
  font-family: HammersmithOne;
  text-transform: capitalize;
`;
