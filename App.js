import { NavigationContainer } from "@react-navigation/native";

import { Accordion } from "react-native-paper/lib/typescript/components/List/List";

import { RootNavigation } from "./src/navigation/Index";





export default function App() {

  return (

    <NavigationContainer>

      <RootNavigation />

    </NavigationContainer>

  );

}