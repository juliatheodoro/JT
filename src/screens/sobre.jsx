import { Button, Text, View } from "react-native";

export const SobreScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Kylie Cosmetics é uma marca de produtos de beleza fundada em 2014 na Califórnia, pela empresária Kylie Jenner.</Text>
      <Button
        title="Sobre a marca"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};