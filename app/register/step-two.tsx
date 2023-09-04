import { BackHeader, Button, CheckBox, Input } from '../../components';
import { getSize } from '../../utils';
import {
  Container,
  OptionsContainer,
  Text
} from './styles';

import { useRouter } from 'expo-router'

export default function StepTwo() {
  return (
    <>
      <Layout />
    </>
  );
}

function Layout() {

  const router = useRouter()
  const handleButtonPress = () => {
    router.push('/register/step-tree')
  }

  return (
    <Container>
      <BackHeader title='Cadastro' />
      <Text mt={30} ml={30}>Preencha suas informações de login nos campos abaixo</Text>
      <Input mt={getSize(20)} label='E-mail' placeholder='Digite seu e-mail...' />
      <Input mt={getSize(10)} label='Senha' placeholder='Digite sua senha...' />
      <Input mt={getSize(10)} label='Confirmar senha' placeholder='Confirme sua senha...' />
      <OptionsContainer mt={10}>
        <CheckBox label='Concordo com os termos' />
      </OptionsContainer>
      <Button mt={20} value='Continuar' onPress={handleButtonPress} />
    </Container >
  );
}
