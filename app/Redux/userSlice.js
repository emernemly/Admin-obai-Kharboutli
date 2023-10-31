import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    item: null,
    loading: false,
    error: null,
  },
  reducers: {
    loadingState(state) {
      state.loading = true;
    },
    signIn(state, action) {
      state.item = action.payload;
      state.loading = false;
      state.error = null;
    },
    userverfy(state, action) {
      state.item = action.payload;
      state.loading = false;
      state.error = null;
    },
    handelError(state, action) {
      state.item = null;
      state.loading = false;
      state.error = action.payload;
    },
    logoutslice(state) {
      state.item = null;
      state.loading = false;
      state.error = null;
    },
  },
});
export const { loadingState, signIn, handelError, userverfy, logoutslice } =
  userSlice.actions;
export default userSlice.reducer;
