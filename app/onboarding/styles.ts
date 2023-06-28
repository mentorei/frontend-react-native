import { Image as DefaultImage } from 'react-native';
import styled from 'styled-components/native';
import { space } from 'styled-system';
import { getSize } from '../../utils';

import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdfffe;
`;

export const Image = styled(DefaultImage)`
  align-self: center;
  ${space}
`;

export const Text = styled.Text`
  color: #746e6e;
  font-size: ${getSize(28)};
  font-family: HammersmithOne;
  flex-direction: column;
  justify-content: center;
  ${space}
`;

export const ButtonGradient = styled(LinearGradient).attrs({
  colors: ['#FFAC38', '#FFD700'],
})`
  width: ${getSize(120)};
  height: ${getSize(50)};
  justify-content: center;
  align-items: center;
  border-radius: ${getSize(30)};
`;

export const ButtonContainer = styled.View`
  align-items: flex-end;
  ${space}
`;

export const Button = styled.Button`
  width: ${getSize(120)};
  height: ${getSize(50)};
  text-align: center;
  font-size: ${getSize(25)};
  font-family: HammersmithOne;
  text-transform: capitalize;
`;
