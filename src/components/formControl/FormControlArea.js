import {
  Box,
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
} from "native-base";

export default function FormControlArea({type, inputType, HelperText}) {
  return (
    <Box alignItems="center" marginBottom="6%" marginTop="6%">
      <Box w="100%" maxWidth="380px">
        <FormControl>
          <Stack mx="4">
            <FormControl.Label>{type}</FormControl.Label>
            <Input type={inputType} defaultValue="" placeholder={type} />
            <FormControl.HelperText>
              {HelperText}
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
      </Box>
    </Box>
  );
}
