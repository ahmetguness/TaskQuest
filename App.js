import { NativeBaseProvider, StatusBar } from "native-base";
import Navigators from "./src/navigators/Navigators";
import { Provider } from "react-redux";
import store from "./src/redux/Store";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar hidden={true} />
      <Provider store={store} >
        <Navigators />
      </Provider>
    </NativeBaseProvider>
  );
}
