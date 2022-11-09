import * as React from 'react';
import { Text, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-web';

function JTHomeScreen() {
  return ( 
  <ScrollView>
    <View style={corzinha}>
      <Text style={titulo}> Bem vindos ao universo de: One Direction </Text>
      <Image style={foto} source={{ uri: 'https://nypost.com/wp-content/uploads/sites/2/2020/04/one-direction-zayn-01.jpg?quality=75&strip=all'}} />
    </View> 
    </ScrollView>
  );
}

function JTSobreScreen() {
  return ( 
    <ScrollView>
    <View style={corzinha}>
      <Text style={titulo}>Sobre a banda </Text>
      <View style={texto}><View style={escolha}>One direction é uma das melhores boy-bands que se formaram nos últimos anos. Apesar da banda ter finalizado, eles continuam fazendo sucesso e espalhando uma enorme quantidade de fãs pelo o mundo. Eles cantam músicas felizes, românticas e que grudam na mente, acredito que seja um dos principais motivos de eu gostar tanto deles, e é claro pelo o motivo de eles terem feito parte de uma época muito boa da minha vida e eu ter muitas lembranças boas das músicas deles. </View></View>
      <Text style={titulotres}> Integrantes</Text>
      <Text style={titulodois}> Harry Styles, 28 anos </Text>
      <Image style={albuns} source={{ uri: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/434_9DF5ABFBA70F228A-1.jpg?w=876&h=484&crop=1'}}></Image>
      <Text style={titulodois}> Louis Tomlinson, 30 anos </Text>
      <Image style={albuns} source={{ uri: 'https://readdork.com/wp-content/uploads/2022/09/Louis-Tomlinson-ANNOUNCE-MAIL-Dork-Magazine-Sarah-Louise-Bennett-PLEASE-DO-NOT-LIFT.jpg'}}></Image>
      <Text style={titulodois}> Niall Horan, 29 anos</Text>
      <Image style={albuns} source={{ uri: 'https://lastfm.freetls.fastly.net/i/u/770x0/095db5bfcde146d4aac5d270686cacf1.jpg#095db5bfcde146d4aac5d270686cacf1'}}></Image>
      <Text style={titulodois}> Liam Payne, 29 anos </Text>
      <Image style={albuns} source={{ uri: 'https://cidadeverde.com/assets/uploads/noticias/fae14ac7ca5ca7bc2bcfe1aa2b9b9576.jpg'}}></Image>
      <Text style={titulodois}> Zayn Malik, 29 anos </Text>
      <Image style={albuns} source={{ uri: 'https://static1.purebreak.com.br/articles/8/12/58/8/@/61134-zayn-malik-do-one-direction-abandona-diapo-1.jpg'}}></Image>

    </View>
    </ScrollView>
  );
}

function JTAlbunsScreen() {
  return (
    <ScrollView>
    <View style={corzinhaal}>
       <Text style={titulo}> Álbuns em sequência de lançamento </Text>
       <Text style={titulodois}> Up All Night - 2011 </Text>
      <Image style={albuns} source={{ uri: 'https://m.media-amazon.com/images/I/61ptMhHa0uL._SX258_BO1,204,203,200_QL70_ML2_.jpg'}}></Image>
       <Text style={titulodois}> Take Me Home - 2012 </Text>
      <Image style={albuns} source={{ uri: 'https://static.fnac-static.com/multimedia/PT/images_produits/PT/ZoomPE/9/2/2/0887254397229/tsp20121102200534/Take-Me-Home.jpg'}}></Image>
      <Text style={titulodois}> Midnight Memories - 2013 </Text>
      <Image style={albuns} source={{ uri: 'https://static.fnac-static.com/multimedia/Images/PT/NR/75/fc/0a/719989/1507-1/tsp20131029150400/Midnight-Memories.jpg'}}></Image>
      <Text style={titulodois}> Four - 2014 </Text>
      <Image style={albuns} source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/e/e8/One_Direction_-_Four.png'}}></Image>
      <Text style={titulodois}> Made in the A.M. - 2015 </Text>
      <Image style={albuns} source={{ uri: 'https://static.fnac-static.com/multimedia/Images/PT/NR/33/e0/0d/909363/1507-1/tsp20161107124214/Made-In-The-A-M.jpg'}}></Image>
      <Text style={titulodois}> Perfect - 2015 </Text>
      <Image style={albuns} source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/9/9a/Capa_de_Perfect_%28One_Direction%29.png'}}></Image>
    </View>
  </ScrollView>
  );
}

function JTContatoScreen() {
  return (
    <ScrollView>
    <View style={corzinhacon}>
      <Text style={titulocon}>Contato</Text>
      <TextInput style={input} label="Email"></TextInput>
      <TextInput style={input} label="Senha"></TextInput>
      <Button style={botão} label="Enviar">Enviar</Button>
    </View>
    </ScrollView>
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
    height: "3200px",
    display: "flex",
    alignItems: "center"
}
const titulo = {
    marginTop: "60px",
    textAlign: "center",
    fontSize: "37px",
}
const titulotres = {
  textAlign: "center",
  fontSize: "37px",
  marginTop: "-500px",
}
const titulodois = {
  marginTop: "10px",
  textAlign: "center",
  fontSize: "17px",
}
const texto = {
    marginTop: "60px",
    width: "90%",
    height: "37%",
}
const escolha = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "85px",
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
  width: "200px",
  height: "200px",
  backgroundColor: "red",
}
const corzinhacon = {
  backgroundColor: "lightpink",
  height: "1000px",
  paddingTop: "20px",
  display: "flex",
  alignItems: "center"
}
const input = {
  width: "200px",
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
  width: "200px",
  height: "50px",
  backgroundColor: "pink",
  marginTop: "20px",
  fontSize: "100px",
  padding: "7px",
  textDecoration: "none",
}
const foto = {
  height: "500px",
  width: "500px"
}
