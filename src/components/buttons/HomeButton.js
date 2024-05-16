import { Box, Button } from "native-base";

export default function HomeButton({ btnName, onPress, style }) {
  return (
    <Box alignItems="center" marginTop="4%" style={style}>
      <Button onPress={onPress}>{btnName}</Button>
    </Box>
  );
}
