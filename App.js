import { StatusBar } from "react-native";
import Navigators from "./src/navigators/Navigators";

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <Navigators />
    </>
  );
}
