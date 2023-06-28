import { Stack } from 'expo-router';

const RegisterNavigation = () => {
  return (
    <>
      <Stack initialRouteName='step-two'>
        <Stack.Screen name="step-one" options={{ headerShown: false, }} />
        <Stack.Screen name="step-two" options={{ headerShown: false, }} />
      </Stack>
    </>
  );
};

export default RegisterNavigation;