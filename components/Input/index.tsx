import { TextInputProps } from 'react-native'
import { Container, Label, RequiredLabel, Input as StyledInput } from './styles'
import { getSize } from '../../utils'
import { SpaceProps } from 'styled-system'


type Props = { label: string, errorMessage?: string }

export function Input({ label, errorMessage, ...props }: TextInputProps & Props & SpaceProps) {
  return (
    <Container {...props}>
      <Label mb={getSize(10)}>{label}</Label>
      <StyledInput  {...props} />
      {errorMessage && (<RequiredLabel>{errorMessage}</RequiredLabel>)}
    </Container >
  )
}