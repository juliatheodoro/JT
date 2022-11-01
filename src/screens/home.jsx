import { Button, Text, View } from "react-native";

export const Home = ({ navigation }) => (

    <View>

        <Text>Bem-vindos a página inicial</Text>

        <Button

            title="Ir para sobre"

            onPress={() => navigation.navigate("Sobre")}

        />

        <Button

            title="Ir para notícias"

            onPress={() => navigation.navigate("Notícias")}

        />

        <Button

            title="Ir para produtos"

            onPress={() => navigation.navigate("Produtos")}

        />
    </View>

)