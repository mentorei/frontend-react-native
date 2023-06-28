import { Container, Gradient, Title, ButtonContainer } from './styles'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from 'expo-router'


const iconPng = require('../../assets/images/shared/back-icon.png')

type Props = { title: string }

export function BackHeader({ title, ...props }: Props) {

  const navigation = useNavigation()

  return (
    <Container {...props}>
      <Gradient>
        <ButtonContainer>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={iconPng} />
          </TouchableOpacity>
        </ButtonContainer>
        <Title>{title}</Title>
      </Gradient>
    </Container >
  )
}