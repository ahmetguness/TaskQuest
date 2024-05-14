import { Box, Center, CheckIcon, Select } from "native-base";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserType } from "../../redux/UserSlice";

export default function SelectBar() {
  const [service, setService] = useState("");

  const dispatcher = useDispatch();

  const handleUserTypeChange = (itemValue) => {
    dispatcher(updateUserType(itemValue));
    setService(itemValue);
  };

  return (
    <Center>
      <Box maxW="300">
        <Select
          selectedValue={service}
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Choose Login Type"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={handleUserTypeChange}
        >
          <Select.Item label="Parent" value="parent" />
          <Select.Item label="Child" value="child" />
        </Select>
      </Box>
    </Center>
  );
}
