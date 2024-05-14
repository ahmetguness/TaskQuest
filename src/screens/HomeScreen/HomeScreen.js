import { Text, View } from "react-native";
import { styles } from "./styles";
import HomeButton from "../../components/buttons/HomeButton";

export default function HomeScreen({ navigation }) {
  const welcomeText =
    "Welcome to a world where families come together for cooperation and rewards! As children successfully complete tasks, they earn points. These points can be redeemed for rewards chosen by their families. Enjoy spending time together completing fun tasks and relish in earning the rewards with your children!";

  return (
    <View style={styles.root}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{welcomeText}</Text>
        <HomeButton
          btnName={"Get Started!"}
          onPress={() => navigation.navigate("LoginScreen")}
        />
      </View>
    </View>
  );
}
