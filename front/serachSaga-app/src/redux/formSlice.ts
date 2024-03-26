import { createSlice } from "@reduxjs/toolkit";

interface initialStateInterface {
  currInputValue: string;
  currResponse: Array<any>;
}


const formSlice = createSlice({
  name: "formSlice",
  initialState: {
    currInputValue: '',
    currResponse: [], 
  } satisfies initialStateInterface as initialStateInterface,
  reducers: {
    setCurrInputValue(state, action) {
      state.currInputValue = action.payload.inputValue;
    },

    fetchUserSuccess(state, action) {
      state.currResponse = action.payload.user
    },

    fetchUserError(state, action) {
      state.currResponse = action.payload.user
    },
  },
});

export default formSlice.reducer;
export const { setCurrInputValue, fetchUserSuccess, fetchUserError} = formSlice.actions