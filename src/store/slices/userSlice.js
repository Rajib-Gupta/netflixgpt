import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
    },
    getUser: (state, action) => {
      state.data = action.payload;
    },
    deleteUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, getUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
