import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { space } from 'styled-system';
import { getSize } from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Gradient = styled(LinearGradient).attrs({
  colors: ['#427CFA', '#4DB9FD'],
})`
  width: 100%;
  ${space}
`;

export const Container = styled(SafeAreaView)`
  padding: ${getSize(17)};
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

export const ButtonContainer = styled.View`
  align-self: baseline;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: ${getSize(25)};
  font-family: HammersmithOne;
  /* margin: 0 auto; */
  margin-left: ${getSize(95)};
  ${space};
`;
