import { StyleSheet, View } from "react-native";
import FormControlArea from "./FormControlArea";
import SelectBar from "./SelectBar";
import HomeButton from "../buttons/HomeButton";

export default function InputContainer({ onPress }) {
  return (
    <View style={styles.root}>
      <View>
        <FormControlArea type={"UserName"} inputType={"text"} />
        <FormControlArea type={"Password"} inputType={"password"} />
        <SelectBar />
        <HomeButton btnName={"Login"} onPress={onPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
  },
  inputContainer: {},
});
