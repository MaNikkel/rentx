import React from 'react';
import {Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold, useFonts} from "@expo-google-fonts/archivo"
import {Inter_400Regular, Inter_500Medium} from "@expo-google-fonts/inter"
import {Home} from "./src/screens/Home";
import AppLoading from "expo-app-loading";
import {ThemeProvider} from "styled-components";
import theme from "./src/styles/theme";
import {CarDetails} from "./src/screens/CarDetails";

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold, Inter_400Regular, Inter_500Medium
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
      <CarDetails/>
    </ThemeProvider>
  );
}

