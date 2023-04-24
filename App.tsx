import {
  useFonts,
  Lexend_400Regular,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";

import AppRoutes from "./src/routes/App.routes";

import { CakeProvider } from "./src/context/CakeContext";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lexend_400Regular,
    Lexend_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <CakeProvider>
      <AppRoutes />
    </CakeProvider>
  );
}
