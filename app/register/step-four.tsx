import { useState, useEffect } from 'react';
import { BackHeader, Button } from '../../components';
import { SelectForm } from '../../components/CardSelect';
import {
  Container,
  RegisterText,
  StyledLink,
  Text
} from './styles';
import { useRouter } from 'expo-router';

export default function StepFour() {
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

  const [selectedOption, setSelectedOption] = useState<string | number>(0)

  useEffect(() => {

  }, [selectedOption])


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
      <Button mt={20} value='Finalizar' onPress={handleButtonPress} />
      <RegisterText mt={20}>Para saber mais ou duvidas acesse o portal <StyledLink href='/register'>mentorei.com.br</StyledLink>.</RegisterText>
    </Container >
  );
}
