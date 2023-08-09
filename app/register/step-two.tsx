import { useState } from 'react';
import { BackHeader, RadioButton, RadioButtonForm, Button } from '../../components';
import {
  Container,
  Text,
  RadioButtonCardContainer,
  RadioButtonCard,
  CardGradient,
  Image,
  CardText,
  RadioContainer,
  RegisterText,
  StyledLink
} from './styles';

const studentPng = require('../../assets/images/screen/register/student.png')
const mentorPng = require('../../assets/images/screen/register/mentor.png')

export default function StepTwo() {
  return (
    <>
      <Layout />
    </>
  );
}

function Layout() {
  const [selectedOption, setSelectedOption] = useState<string | number>(0)

  return (
    <Container>
      <BackHeader title='Cadastro' />
      <Text mt={30} ml={30}>Escolha sua forma de acesso</Text>
      <RadioButtonForm onSelected={setSelectedOption}>
        <RadioButtonCardContainer mt={30}>
          <CardGradient colors={['#FFD700', '#FFAC38']}>
            <RadioButtonCard onPress={() => setSelectedOption(1)}>
              <RadioContainer>
                <RadioButton color='#fff' id={1} selected={selectedOption === 1} />
              </RadioContainer>
              <Image source={studentPng} />
              <CardText mb={30}>Aluno</CardText>
            </RadioButtonCard>
          </CardGradient>
          <CardGradient colors={['#4DB9FD', '#427CFA']}>
            <RadioButtonCard onPress={() => setSelectedOption(2)}>
              <RadioContainer>
                <RadioButton color='#fff' id={2} selected={selectedOption === 2} />
              </RadioContainer>
              <Image source={mentorPng} />
              <CardText mb={30}>Mentor</CardText>
            </RadioButtonCard>
          </CardGradient>
        </RadioButtonCardContainer>
      </RadioButtonForm>
      <Button mt={20} title='Continuar' />
      <RegisterText mt={20}>Para saber mais ou duvidas acesse o portal <StyledLink href='/register'>mentorei.com.br</StyledLink>.</RegisterText>
    </Container >
  );
}
