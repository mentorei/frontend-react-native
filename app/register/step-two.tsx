import { BackHeader, Button, CheckBox, Input } from '../../components';
import { getSize } from '../../utils';
import {
  Container,
  OptionsContainer,
  Text
} from './styles';

export default function StepTwo() {
  return (
    <>
      <Layout />
    </>
  );
}

function Layout() {
  return (
    <Container>
      <BackHeader title='Cadastro' />
      <Text mt={30} ml={30}>Escolha sua forma de acesso</Text>
      <Input mt={getSize(20)} label='Nome completo' placeholder='Digite seu nome...' />
      <Input mt={getSize(10)} label='E-mail' placeholder='Digite seu e-mail...' />
      <Input mt={getSize(10)} label='Senha' placeholder='Digite sua senha...' />
      <Input mt={getSize(10)} label='Confirmar senha' placeholder='Confirme sua senha...' />
      <OptionsContainer mt={10}>
        <CheckBox label='Concordo com os termos' />
      </OptionsContainer>
      <Button mt={20} title='Continuar' />
    </Container >
  );
}
