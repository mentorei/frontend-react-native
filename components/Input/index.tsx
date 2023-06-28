import { TextInputProps } from 'react-native'
import { Container, Label, Input as StyledInput } from './styles'
import { getSize } from '../../utils'
import { SpaceProps } from 'styled-system'


type Props = { label: string }

export function Input({ label, ...props }: TextInputProps & Props & SpaceProps) {
  return (
    <Container {...props}>
      <Label mb={getSize(10)}>{label}</Label>
      <StyledInput  {...props} />
    </Container >
  )
}