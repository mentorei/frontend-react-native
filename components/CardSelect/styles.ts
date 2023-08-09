import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, Image } from 'react-native';
import styled from 'styled-components/native';
import { space } from 'styled-system';
import { getSize } from '../../utils';

export const FormContainer = styled.View`
  ${space}
`;

export const CardContainer = styled(LinearGradient).attrs({
  colors: ['#427EFA', '#4CB6FD'],
})`
  width: ${getSize(150)};
  height: ${getSize(100)};
  border-radius: ${getSize(7)};
  margin-right: ${getSize(15)};
  margin-bottom: ${getSize(15)};
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  text-align: center;
  font-family: HammersmithOne;
  font-size: ${getSize(20)};
`;

export const List = styled(FlatList).attrs({
  numColumns: 2,
})`
  width: 95%;
`;

export const SelectedIcon = styled(Image)`
  align-self: flex-end;
  height: ${getSize(16)};
  width: ${getSize(16)};
  top: ${getSize(7)};
  right: ${getSize(7)};
  position: absolute;
`;
