import styled from 'styled-components/native';
import { getSize } from '../../utils';
import { RadioButtonProps } from './types';
import { space } from 'styled-system';

const defaultColor = '#000';

export const RadioButtonFormContainer = styled.View`
  ${space}
`;

export const RadioButtonContainer = styled.Pressable`
  height: ${getSize(30)};
  width: ${getSize(30)};
`;

export const Radio = styled.View`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border-width: 4%;
  border-color: ${(props: RadioButtonProps) => props.color ?? defaultColor};
  justify-content: center;
  align-items: center;
`;

export const RadioButtonFill = styled.View`
  height: 60%;
  width: 60%;
  border-radius: 30%;
  background-color: ${(props: RadioButtonProps) => props.color ?? defaultColor};
`;
