const { createSlice } = require("@reduxjs/toolkit");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const UserSlice = createSlice({
  name: "userSlice",
  initialState: {
    userType: "",
    matchId: "asd",
  },
  reducers: {
    updateUserType(state, action) {
      state.userType = capitalizeFirstLetter(action.payload);
    },
    updateMatchId(state, action) {
      state.matchId = action.payload;
    },
  },
});

export default UserSlice;
export const { updateUserType } = UserSlice.actions;
