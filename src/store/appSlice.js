import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {}
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const {  } = appSlice.actions

export default appSlice.reducer