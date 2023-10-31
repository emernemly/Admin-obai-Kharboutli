import { createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
  name: 'photo',
  initialState: {
    items: [],
    loading: false,
    error: null,
    secc: null,
  },
  reducers: {
    loadingState(state) {
      state.loading = true;
    },
    seccPhoto(state, action) {
      state.secc = action.payload;
    },
    getAll(state, action) {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    handelError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { loadingState, getAll, handelError, seccPhoto } =
  photoSlice.actions;
export default photoSlice.reducer;
