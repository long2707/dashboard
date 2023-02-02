import { Box, CircularProgress } from "@mui/material";
import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component={"img"}
        src="/icon_logo.svg"
        width={"100px"}
        height="100px"
      ></Box>
    </Box>
  );
};

export default LoadingScreen;
