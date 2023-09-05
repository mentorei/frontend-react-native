import { TouchableOpacityProps } from 'react-native'
import { SpaceProps } from 'styled-system'
import { Container, Gradient, Button as StyledButton, Text } from './styles'


type Props = { value: string }


export function Button({ value, ...props }: Props & TouchableOpacityProps & SpaceProps) {
  return (
    <StyledButton {...props} >
      <Container {...props}>
        <Gradient>
          <Text>
            {value}
          </Text>
        </Gradient>
      </Container>
    </StyledButton>
  )
}