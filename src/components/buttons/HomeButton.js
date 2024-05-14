import { Box, Button } from "native-base";

export default function HomeButton({ btnName, onPress }) {
  return (
    <Box alignItems="center" marginTop="4%">
      <Button onPress={onPress}>{btnName}</Button>
    </Box>
  );
}
