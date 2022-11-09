import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, TextInput } from 'react-native-paper';



function JTHomeScreen() {
  return (
    <View style={corzinha}>
      <Text style={titulo}>Bem Vindos!!!</Text>
    </View>
  );
}

function JTSobreScreen() {
  return (
    <View style={corzinha}>
      <Text style={titulo}>Sobre o Tema</Text>
      <View style={texto}><View style={escolha}>One direction é uma das melhores boy-bands,que se formaram nos últimos anos. Apesar da banda ter finalizado, eles continuam fazendo sucesso e espalhando uma enorme legião de fãs pelo o mundo. Eles, cantam músicas felizes, românticas e que grudam na mente, acredito que seja um dos principais motivos de eu gostar tanto deles, e é claro pelo o motivo de eles terem feito parte de uma época muito boa da minha vida e eu ter muitas lembranças boas das músicads deles. </View></View>
    </View>
  );
}

function JTAlbunsScreen() {
  return (
    <View style={corzinhaal}>
      <View style={albuns}></View>
      <View style={albuns}></View>
      <View style={albuns}></View>
      <View style={albuns}></View>
    </View>
  );
}

function JTContatoScreen() {
  return (
    <View style={corzinhacon}>
      <Text style={titulocon}>Contato</Text>
      <TextInput style={input} label="Email"></TextInput>
      <TextInput style={input} label="Email"></TextInput>
      <Button style={botão} label="Enviar">Enviar</Button>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={JTHomeScreen} />
        <Tab.Screen name="Sobre" component={JTSobreScreen} />
        <Tab.Screen name="Albuns" component={JTAlbunsScreen} />
        <Tab.Screen name="Contato" component={JTContatoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const corzinha = {
    backgroundColor: "lightpink",
    height: "100%",
    display: "flex",
    alignItems: "center"
}
const titulo = {
    marginTop: "60px",
    textAlign: "center",
    fontSize: "40px",
}
const texto = {
    marginTop: "60px",
    borderStyle: "solid",
    borderWidth: "1px",
    width: "50%",
    height: "40%",
    padding: "20px"
}
const escolha = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "10px",
  height: "100%",
  fontSize: "30px",
}
const corzinhaal = {
  backgroundColor: "lightpink",
  height: "100%",
  padding: "10px",
  display: "flex",
  alignItems: "center"
}
const albuns = {
  margin: "15px",
  width: "40%",
  height: "170px",
  backgroundColor: "red",
}
const corzinhacon = {
  backgroundColor: "lightpink",
  height: "100%",
  paddingTop: "2%",
  display: "flex",
  alignItems: "center"
}
const input = {
  width: "20%",
  height: "50px",
  backgroundColor: "white",
  marginTop: "20px"
}
const titulocon = {
  margin: "60px",
  textAlign: "center",
  fontSize: "50px",
}
const botão = {
  width: "20%",
  height: "50px",
  backgroundColor: "green",
  marginTop: "20px",
  fontSize: "100px",
  padding: "7px",
  textDecoration: "none",
}
