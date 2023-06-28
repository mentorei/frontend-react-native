import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { space } from 'styled-system';
import { getSize } from '../../utils';

export const Container = styled.View`
  width: 100%;
  ${space}
`;

export const ButtonContainer = styled.View`
  align-self: baseline;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['#427CFA', '#4DB9FD'],
})`
  padding: ${getSize(17)};
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: ${getSize(25)};
  font-family: HammersmithOne;
  margin: 0 auto;
  ${space};
`;
