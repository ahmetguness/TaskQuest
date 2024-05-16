import { Alert, ScrollView, Text, View } from "react-native";
import InputContainer from "../../components/formControl/InputContainer";
import { styles } from "./styles";
import { useSelector } from "react-redux";

export default function LoginScreen({ navigation }) {
  const userType = useSelector((state) => state.user.userType);
  const isUserTypeSelected = userType !== "";

  const handlePress = () => {
    if (!isUserTypeSelected) {
      Alert.alert("Please Choose a Login Type");
    } else {
      navigation.navigate(userType + "HomeScreen");
    }
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome to TaskQuest</Text>
      </View>
      <InputContainer onPress={handlePress} />
    </ScrollView>
  );
}
