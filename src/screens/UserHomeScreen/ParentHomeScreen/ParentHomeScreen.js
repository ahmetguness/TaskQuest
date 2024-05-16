import { Text, View } from "react-native";
import FormControlArea from "../../../components/formControl/FormControlArea";
import HomeButton from "../../../components/buttons/HomeButton";
import { useSelector } from "react-redux";
import { styles } from "./styles";
import { AddIcon, Heading } from "native-base";
import TaskIconCard from "../../../components/cards/TaskIconCard";

export default function ParentHomeScreen() {
  const matchId = useSelector((state) => state.user.matchId);
  const isMatchIdNull = matchId === "" ? true : false;

  function idInputContainer() {
    return (
      <View style={styles.root}>
        <View style={styles.headingContainer}>
          <Heading>You need to be connected</Heading>
        </View>
        <FormControlArea
          type={"Child ID to Match"}
          inputType={"text"}
          HelperText={"ID must consist of 20 characters"}
        />
        <HomeButton btnName={"Submit"} style={styles.btn} />
      </View>
    );
  }

  function parentHomeContainer() {
    return (
      <View style={styles.parentHomeRoot}>
        <View style={styles.idContainer}>
          <Heading size="md">Connected ID: </Heading>
          <Text style={styles.idText}>{matchId}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TaskIconCard icon={<AddIcon size="22" />} text={"asd"} />
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {isMatchIdNull ? idInputContainer() : parentHomeContainer()}
    </View>
  );
}
