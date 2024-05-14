const { createSlice } = require("@reduxjs/toolkit");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const UserSlice = createSlice({
  name: "userSlice",
  initialState: {
    userType: "",
  },
  reducers: {
    updateUserType(state, action) {
      state.userType = capitalizeFirstLetter(action.payload);
    },
  },
});

export default UserSlice;
export const { updateUserType } = UserSlice.actions;
