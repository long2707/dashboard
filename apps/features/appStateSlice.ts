import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAppStateType {
  appState: string;
}

const appStateSlice = createSlice({
  name: "appState",
  initialState: {
    appState: "dashboard",
  } as IAppStateType,
  reducers: {
    setAppState: (state, action: PayloadAction<string>) => {
      state.appState = action.payload;
    },
  },
});
export const { setAppState } = appStateSlice.actions;

export default appStateSlice.reducer;
