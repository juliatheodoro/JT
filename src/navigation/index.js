import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "../screens/Home";
import { Notícias } from "../screens/Notícias";
import { Produtos } from "../screens/Produtos";
import { Sobre } from "../screens/Sobre";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// Simboliza a instância do Stack
const Stack = createMaterialBottomTabNavigator();

// Componente base
export const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      activeColor="#000000"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: '#ff00ff' }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
       options={{
         tabBarLabel: 'Home',
         tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
         ),
       }}
      />
      <Stack.Screen
        name="Sobre"
        component={Sobre}
       options={{
         tabBarLabel: 'Sobre',
        tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="api" color={color} size={26} />
         ),
       }}
      />
      <Stack.Screen
        name="Produtos"
        component={Produtos}
       options={{
         tabBarLabel: 'Produtos',
         tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="watch" color={color} size={26} />
         ),
       }}
      />
      <Stack.Screen
        name="Notícias"
        component={Notícias}
       options={{
         tabBarLabel: 'Notícias',
         tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="skateboard" color={color} size={26} />
         ),
       }}
      />
       
    </Stack.Navigator>
  )
}