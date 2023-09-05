import { Button, Header, Input } from '../../components';
import { getSize } from '../../utils';
import {
  Container,
  Text
} from './styles';

import { useRouter } from 'expo-router';

import { useForm, Controller } from 'react-hook-form'

type FormDataProps = { name: string; cpf: string }

export default function StepOne() {
  return (
    <>
      <Layout />
    </>
  );
}

function Layout() {

  const router = useRouter()
  const { control, handleSubmit, formState } = useForm<FormDataProps>()

  const handleButtonPress = handleSubmit((data) => {
    console.log(data)
    // router.push('/register/step-two')
  })

  return (
    <Container>
      <Header backButton title='Cadastro' />
      <Text mt={30} ml={30}>Preencha suas informações pessoais nos campos abaixo</Text>
      <Controller control={control} name='name' rules={{ required: 'O nome é obrigatório.' }} render={({ field }) => (
        <Input errorMessage={formState.errors.name?.message} mt={getSize(20)} label='Nome completo' placeholder='Digite seu nome...' onChangeText={field.onChange} value={field.value} />)} />
      <Controller control={control} name='cpf' rules={{ required: 'O cpf é obrigatório.' }} render={({ field }) => (<Input mt={getSize(10)} label='CPF' keyboardType='numeric' errorMessage={formState.errors.cpf?.message} placeholder='Digite seu cpf...' onChangeText={field.onChange} onSubmitEditing={handleButtonPress} returnKeyType='send' value={field.value} />)} />
      <Button mt={20} value='Continuar' onPress={handleButtonPress} />
    </Container >
  );
}
