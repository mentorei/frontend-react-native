import { useNavigation } from "expo-router";
import { Image, TouchableOpacity } from "react-native";
import { ButtonContainer, Container, Gradient, Title } from "./styles";

const iconPng = require("@assets/images/shared/back-icon.png");

interface Props {
  title: string;
  backButton?: boolean;
}

export function Header({ title, backButton, ...props }: Props) {
  const navigation = useNavigation();

  return (
    <Gradient>
      <Container {...props}>
        {backButton && (
          <ButtonContainer>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image source={iconPng} />
            </TouchableOpacity>
          </ButtonContainer>
        )}
        <Title>{title}</Title>
      </Container>
    </Gradient>
  );
}
