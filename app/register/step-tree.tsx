import { useState } from 'react';
import { BackHeader, Button } from '../../components';
import { SelectForm } from '../../components/CardSelect';
import {
  Container,
  RegisterText,
  StyledLink,
  Text
} from './styles';
import { useRouter } from 'expo-router';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StepTree() {
  return (
    <>
      <Layout />
    </>
  );
}

function Layout() {

  const router = useRouter()
  const handleButtonPress = async () => {
    await AsyncStorage.setItem('ALLOW_ACCESS', 'true')
    router.push('/login')
  }


  const [selectedOption, setSelectedOption] = useState<string | number>(0)

  return (
    <Container>
      <BackHeader title='Cadastro' />
      <Text mt={30} ml={30}>Selecione suas skills</Text>
      <SelectForm
        ml={30}
        data={[
          { text: 'JavaScript', id: 1 },
          { text: 'Python', id: 2 },
          { text: 'SQL', id: 3 },
          { text: 'NoSQL', id: 4 },
          { text: 'AWS', id: 5 },
          { text: 'Comunicação', id: 6 }
        ]}
        onSelected={setSelectedOption}
      />
      <Button mt={20} title='Finalizar' onPress={handleButtonPress} />
      <RegisterText mt={20}>Para saber mais ou duvidas acesse o portal <StyledLink href='/register'>mentorei.com.br</StyledLink>.</RegisterText>
    </Container >
  );
}
