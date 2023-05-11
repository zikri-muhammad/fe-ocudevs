const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    account: {
      name: null,
      email: null,
      phone: null,
    },
    token: {
      expires: null,
      access_token: null,
    },
  },
  reducers: {
    setAccount(state, { payload }) {
      state.account = payload;
    },
    setToken(state, { payload }) {
      state.token = payload;
    },
  },
});

export const { setAccount, setToken } = userSlice.actions;
export default userSlice.reducer;
