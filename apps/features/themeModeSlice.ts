import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TypeThemeMode = {
  themeMode: string;
};

export const themeModeSlice = createSlice({
  name: "themeMode",
  initialState: {
    themeMode: "light",
  } as TypeThemeMode,
  reducers: {
    setThemMode: (state, action: PayloadAction<string>) => {
      state.themeMode = action.payload;
    },
  },
});

export const { setThemMode } = themeModeSlice.actions;
export default themeModeSlice.reducer;
