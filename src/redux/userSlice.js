import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  profile_Pic: "",
  token: "",
  onlineUser: [],
  socketConnection: null,
};

const userSlice = createSlice({
  _id: "",
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state._id = action.payload._id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.profile_Pic = action.payload.profile_Pic;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state._id = "";
      state.email = "";
      state.profile_Pic = "";
      state.token = "";
    },
    setOnlineUser: (state, action) => {
      state.onlineUser = action.payload;
    },
    setSocketConnection: (state, action) => {
      state.socketConnection = action.payload;
    },
  },
});
export const { setToken, setUser, logout, setOnlineUser, setSocketConnection } =
  userSlice.actions;
export default userSlice.reducer;
