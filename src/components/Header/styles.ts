import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { space } from "styled-system";
import { getSize } from "@/utils";
import { SafeAreaView } from "react-native-safe-area-context";

export const Gradient = styled(LinearGradient).attrs({
  colors: ["#427CFA", "#4DB9FD"],
})`
  width: 100%;
  justify-content: center;
  align-items: center;
  ${space};
`;

export const Container = styled(SafeAreaView)`
  flex-direction: row;
  justify-content: flex-start;
  width: 90%;
  padding-bottom: ${getSize(10)};
`;

export const ButtonContainer = styled.View`
  align-self: baseline;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: ${getSize(25)};
  font-family: HammersmithOne;
  margin: 0 auto;
  ${space};
`;
