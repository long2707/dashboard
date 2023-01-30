import { RootState } from "@/apps/store";
import themeConfigs from "@/configs/theme.configs";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import React, { ReactNode } from "react";
import { useSelector } from "react-redux";

const WrapperLayout = ({ children }: { children: ReactNode }) => {
  const { themeMode } = useSelector((state: RootState) => state.themeMode);

  return (
    <ThemeProvider theme={themeConfigs.custom({ mode: themeMode })}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "background.default",
          minHeight: "100vh",
        }}
        component="main"
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default WrapperLayout;
