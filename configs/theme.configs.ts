import {
  ERROR,
  GREY_COLOR,
  INFO,
  PRIMARY,
  SECONDARY,
  SUCCESS,
  WARNING,
} from "@/constants/colors";
import { createTheme } from "@mui/material";

import { Public_Sans, Barlow } from "@next/font/google";

export const primaryFont = Public_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const secondaryFont = Barlow({
  weight: ["900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const enum themeModes {
  light = "light",
  dark = "dark",
}

const themeConfigs = {
  custom: ({ mode }: { mode: any }) => {
    const customPalette =
      mode === themeModes.light
        ? {
            primary: {
              main: PRIMARY.main,
              lighter: PRIMARY.lighter,
              light: PRIMARY.light,
              contracstText: "#000",
            },
            secondary: {
              main: SECONDARY.main,
              lighter: SECONDARY.lighter,
              light: SECONDARY.light,
              constracstText: GREY_COLOR[800],
            },
            background: {
              default: GREY_COLOR[100],
              secondary: GREY_COLOR[300],
            },
            info: {
              main: INFO.main,
              lighter: INFO.lighter,
              light: INFO.light,
            },
            success: {
              main: SUCCESS.main,
              lighter: SUCCESS.lighter,
              light: SUCCESS.light,
            },
            warning: {
              main: WARNING.main,
              lighter: WARNING.lighter,
              light: WARNING.light,
            },
            error: {
              main: ERROR.main,
              lighter: ERROR.lighter,
              light: ERROR.light,
            },
            border: {
              default: GREY_COLOR[800],
            },
          }
        : {
            primary: {
              main: PRIMARY.main,
              darker: PRIMARY.darker,
              dark: PRIMARY.dark,
              contracstText: "#fff",
            },
            secondary: {
              main: SECONDARY.main,
              darker: SECONDARY.darker,
              dark: SECONDARY.dark,
              constracstText: GREY_COLOR[800],
            },
            background: {
              default: GREY_COLOR[900],
              secondary: GREY_COLOR[800],
            },
            info: {
              main: INFO.main,
              darker: INFO.darker,
              dark: INFO.dark,
            },
            success: {
              main: SUCCESS.main,
              darker: SUCCESS.darker,
              dark: SUCCESS.dark,
            },
            warning: {
              main: WARNING.main,
              darker: WARNING.darker,
              dark: WARNING.dark,
            },
            error: {
              main: ERROR.main,
              darker: ERROR.darker,
              dark: ERROR.dark,
            },
            border: {
              default: GREY_COLOR[0],
            },
          };
    return createTheme({
      palette: { mode, grey: GREY_COLOR, ...customPalette },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true },
        },
      },
      typography: { fontFamily: primaryFont.style.fontFamily },
    });
  },
};

export default themeConfigs;
