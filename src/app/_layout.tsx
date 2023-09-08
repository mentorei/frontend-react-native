/* eslint-disable @typescript-eslint/naming-convention */
import { ApolloProvider } from "@apollo/client";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { mentoreiApolloClient } from "../services";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("@assets/fonts/SpaceMono-Regular.ttf"),
    HammersmithOne: require("@assets/fonts/HammersmithOne-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (loaded) {
    SplashScreen.hideAsync();
  }

  if (!loaded) {
    return null;
  }

  return (
    <>
      {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
      <StatusBar style="dark" />
      <ApolloProvider client={mentoreiApolloClient}>
        <Stack screenOptions={{ headerShown: false }} />
      </ApolloProvider>
      {/* </ThemeProvider> */}
    </>
  );
}
