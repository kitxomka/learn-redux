import { createSlice } from '@reduxjs/toolkit';

export const counterBSlice = createSlice({
  name: 'counterB', //state name
  initialState: {
    count: 2,
  },
  // reducers actions
  reducers: {
    multiplied: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count *= 2
    },
    division: (state) => {
      state.count /= 2
    },
  },
})

// Action creators are generated for each case reducer function
export const { multiplied, division } = counterBSlice.actions;

export default counterBSlice.reducer;