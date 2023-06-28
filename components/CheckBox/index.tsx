
import { Checkbox as StyledCheckbox, Container, Text } from './styles'
import { getSize } from '../../utils'
import { SpaceProps } from 'styled-system'
import ExpoCheckbox, { CheckboxProps } from 'expo-checkbox'


type Props = { label: string }

export function CheckBox({ label, ...props }: CheckboxProps & Props & SpaceProps) {
  return (
    <Container {...props}>
      <StyledCheckbox  {...props} />
      <Text>{label}</Text>
    </Container>
  )
}