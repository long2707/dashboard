import { ERROR, GREY_COLOR, PRIMARY } from "@/constants/colors";
import {
  Box,
  Button,
  SwipeableDrawer,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/apps/store";
import { setThemMode } from "@/apps/features/themeModeSlice";
import { useLocalStorge } from "@/hooks";

type Props = {};

const SetingTheme: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const themeMode = useSelector(
    (state: RootState) => state.themeMode.themeMode
  );
  const localStorgeTheme = useLocalStorge("theme");

  const dispatch = useDispatch();
  const handlerChangeMode = (value: string) => {
    localStorgeTheme.setItem(value);
    dispatch(setThemMode(value));
  };
  return (
    <>
      <Box
        sx={{
          padding: "4px",
          position: "fixed",
          bottom: "24px",
          right: "20px",
          zIndex: "9999",
          borderRadius: "30px",
          boxShadow: "rgb(0 0 0 / 36%) -12px 12px 32px -4px",
          backgroundColor: GREY_COLOR[900],
        }}
      >
        <Box>
          <Box
            sx={{
              position: "absolute",
              top: "10px",
              right: "22px",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: ERROR.dark,
            }}
          />
          <Button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <SettingsIcon />
          </Button>
        </Box>
      </Box>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        onOpen={() => {
          setIsOpen(true);
        }}
        sx={{
          zIndex: "9999",
          "& .MuiPaper-root": {
            backgroundColor: "background.default",
            width: "290px",
          },
        }}
      >
        <Box
          sx={{
            padding: "16px 8px 16px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "600",
              fontSize: "1rem",
            }}
          >
            Settings
          </Typography>
          <Button onClick={() => setIsOpen(false)}>
            <CloseIcon
              sx={{
                color: GREY_COLOR[500],
              }}
            />
          </Button>
        </Box>
        <Divider />
        <Box
          sx={{
            padding: "20px 20px 0 20px",
          }}
        >
          <Box>
            <Box
              component={"span"}
              sx={{
                color: GREY_COLOR[500],
                fontSize: "0.875rem",
                fontWeight: "700",
              }}
            >
              Mode
            </Box>
            <Grid
              sx={{
                my: "12px",
              }}
              container
              spacing={2}
            >
              <Grid item xs={6}>
                <Button
                  sx={{
                    height: "70px",
                    width: "100%",
                    border: "1px solid #919eab3d ",
                    cursor: "pointer",
                    color:
                      themeMode === "dark" ? GREY_COLOR[400] : PRIMARY.main,
                    boxShadow:
                      themeMode === "light"
                        ? "rgb(145 158 171 / 16%) 0px 12px 24px -4px"
                        : "none",
                  }}
                  onClick={() => {
                    handlerChangeMode("light");
                    setIsOpen(false);
                  }}
                >
                  <WbSunnyIcon />
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  sx={{
                    height: "70px",
                    width: "100%",
                    border: "1px solid #919eab3d ",
                    cursor: "pointer",
                    color:
                      themeMode === "light" ? GREY_COLOR[400] : PRIMARY.main,
                    boxShadow:
                      themeMode === "dark"
                        ? "rgb(145 158 171 / 16%) 0px 12px 24px -4px"
                        : "none",
                  }}
                  onClick={() => {
                    handlerChangeMode("dark");
                    setIsOpen(false);
                  }}
                >
                  <NightsStayIcon />
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default SetingTheme;
