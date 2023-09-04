import { Container, Gradient, Title, ButtonContainer } from './styles'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'


const iconPng = require('../../assets/images/shared/back-icon.png')

type Props = { title: string }

export function BackHeader({ title, ...props }: Props) {

  const navigation = useNavigation()

  return (
    <Gradient>
      <Container {...props}>
        <ButtonContainer>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={iconPng} />
          </TouchableOpacity>
        </ButtonContainer>
        <Title>{title}</Title>
      </Container >
    </Gradient>
  )
}