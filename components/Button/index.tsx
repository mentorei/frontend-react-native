import { ButtonProps } from 'react-native'
import { Button as StyledButton, Container, Gradient } from './styles'
import { getSize } from '../../utils'
import { SpaceProps } from 'styled-system'

export function Button({ ...props }: ButtonProps & SpaceProps) {
  return (
    <Container {...props}>
      <Gradient>
        <StyledButton color='#FDFFFE' {...props} />
      </Gradient>
    </Container>
  )
}