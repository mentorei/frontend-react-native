import { useRouter } from 'expo-router';
import { getSize } from '../../utils';
import { Button, Container, ButtonGradient, Image, Text, ButtonContainer } from './styles';

const logoPng = require('../../assets/images/shared/gray-logo.png')
const bannerPng = require('../../assets/images/screen/onboarding/banner.png')

export default function Onboarding() {
  return (
    <>
      <Layout />
    </>
  );
}

function Layout() {
  const router = useRouter()
  const handleButtonPress = () => {
    router.push('/login')
  }

  return (
    <Container>
      <Image source={logoPng} mt={getSize(30)} />
      <Image source={bannerPng} mt={getSize(30)} />
      <Text ml={getSize(30)} mt={getSize(30)} mr={getSize(30)} >Esse é o mentorei, o aplicativo que veio para governar o ensino digital</Text>
      <ButtonContainer mt={getSize(20)} mr={getSize(30)}>
        <ButtonGradient>
          <Button title='Seguir' color='#fff' onPress={handleButtonPress} />
        </ButtonGradient>
      </ButtonContainer>
    </Container >
  );
}
