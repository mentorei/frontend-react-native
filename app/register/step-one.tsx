import { BackHeader, Button, CheckBox, Input } from '../../components';
import { getSize } from '../../utils';
import {
  Container,
  OptionsContainer,
  Text
} from './styles';

import { useRouter } from 'expo-router'

export default function StepOne() {
  return (
    <>
      <Layout />
    </>
  );
}

function Layout() {

  const router = useRouter()
  const handleButtonPress = () => {
    router.push('/register/step-two')
  }

  return (
    <Container>
      <BackHeader title='Cadastro' />
      <Text mt={30} ml={30}>Preencha suas informações pessoais nos campos abaixo</Text>
      <Input mt={getSize(20)} label='Nome completo' placeholder='Digite seu nome...' />
      <Input mt={getSize(10)} label='CPF' placeholder='Digite seu cpf...' />
      {/* <OptionsContainer mt={10}>
        <CheckBox label='Concordo com os termos' />
      </OptionsContainer> */}
      <Button mt={20} value='Continuar' onPress={handleButtonPress} />
    </Container >
  );
}
