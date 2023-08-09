import { useRouter } from 'expo-router';
import { Button, CheckBox, Input } from '../../components';
import { getSize } from '../../utils';
import {
  Container,
  Image,
  WelcomeText,
  OptionsContainer,
  ForgotPasswordText,
  RegisterText,
  StyledLink
} from './styles';

import { Alert } from 'react-native'
import { useState, useEffect } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';

const bannerPng = require('../../assets/images/screen/login/banner.png')
const logoPng = require('../../assets/images/shared/white-logo.png')

const ALLOWED_CREDENTIALS = { email: 'lucassm02@gmail.com', password: 'Fiap@2023' }


export default function Login() {
  return (
    <>
      <Layout />
    </>
  );
}

function Layout() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [trie, setTrie] = useState(0)

  const router = useRouter()
  const handleButtonPress = async () => {

    setTrie((trie) => trie + 1)

    if ((trie + 1) === 2 && email === ALLOWED_CREDENTIALS.email && password === ALLOWED_CREDENTIALS.password) {
      router.push('/home')
      return;
    }

    Alert.alert('Usuário ou senha incorreta!')

  }


  return (
    <Container>
      <Image source={bannerPng} />
      <Image source={logoPng} position='absolute' top={80} />
      <WelcomeText position='absolute' top={150}>Bem vindo!</WelcomeText>
      <Input mt={getSize(30)} label='E-mail' placeholder='Digite seu e-mail...' onChangeText={(value) => setEmail(value)} value={email} keyboardType='email-address' />
      <Input mt={getSize(15)} label='Senha' placeholder='Digite sua senha...' secureTextEntry={true} onChangeText={setPassword} value={password} />
      <OptionsContainer mt={10}>
        <CheckBox label='Lembrar senha' />
        <ForgotPasswordText>
          Esqueceu sua senha?
        </ForgotPasswordText>
      </OptionsContainer>
      <Button mt={20} title='Entrar' onPress={handleButtonPress} />
      <RegisterText mt={20}>Não possui cadastro? clique em <StyledLink href='/register'>Criar conta</StyledLink>.</RegisterText>
    </Container>
  );
}
