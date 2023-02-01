import { setThemMode } from "@/apps/features/themeModeSlice";
import { RootState } from "@/apps/store";
import themeConfigs from "@/configs/theme.configs";
import { useLocalStorge } from "@/hooks";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import React, { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import SetingTheme from "../SettingTheme/SetingTheme";

const WrapperLayout = ({ children }: { children: ReactNode }) => {
  const { themeMode } = useSelector((state: RootState) => state.themeMode);
  const localStorgeTheme = useLocalStorge("theme");
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (localStorgeTheme) {
      dispatch(setThemMode(localStorgeTheme.getItem() || "light"));
    }
  }, [localStorgeTheme, dispatch]);
  return (
    <ThemeProvider theme={themeConfigs.custom({ mode: themeMode })}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "background.default",
          minHeight: "100vh",
          display: "flex",
          position: "relative",
        }}
        component="main"
      >
        {children}
      </Box>
      <SetingTheme />
    </ThemeProvider>
  );
};

export default WrapperLayout;
