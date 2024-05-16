import { AddIcon } from "native-base";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TaskIconCard({ icon, text }) {
  return (
    <TouchableOpacity style={styles.root}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "35%",
    height: "20%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
