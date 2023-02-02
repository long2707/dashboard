import React from "react";
import {
  alpha,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import menu from "@/configs/menu.config";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setAppState } from "@/apps/features/appStateSlice";
import { RootState } from "@/apps/store";
import { PRIMARY } from "@/constants/colors";

const Sidebar = ({
  open,
  toggleSidebar,
}: {
  open: boolean;
  toggleSidebar: (active: boolean) => void;
}) => {
  const router = useRouter();

  const appState = useSelector((state: RootState) => state.appState.appState);
  const dispatch = useDispatch();
  console.log(appState);
  const drawer = (
    <>
      <Toolbar />
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mx: "12px",
            bgcolor: "rgb(145 158 171 / 12%)",
            borderRadius: "10px",
            padding: "20px 10px",
            mb: "40px",
          }}
        >
          <Box
            component={"img"}
            src={"images/avatar_default.jpg"}
            width={"30px"}
            height={"30px"}
            alt="avatar"
            sx={{
              borderRadius: "50%",
            }}
          />
          <Typography
            sx={{
              textTransform: "capitalize",
              ml: "10px",
              color: "grey.600",
            }}
          >
            admin
          </Typography>
        </Box>
      </Box>
      <List sx={{ px: "12px" }}>
        {menu.map((item) => (
          <ListItemButton
            key={item.display}
            selected={appState.includes(item.state)}
            onClick={() => {
              router.push(item.path);
              dispatch(setAppState(item.state));
            }}
            sx={{
              borderRadius: "10px",
              cursor: "pointer",
              mb: "5px",
              "&active": {
                bgcolor: "#00ab5529",
                "& .MuiTypography-body1": {
                  fontWeight: 700,
                },
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: appState.includes(item.state)
                  ? PRIMARY.light
                  : "grey.500",
                fontSize: "1.325rem",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  textTransform="capitalize"
                  sx={{
                    color: appState.includes(item.state)
                      ? PRIMARY.dark
                      : "grey.600",
                  }}
                >
                  {item.display}
                </Typography>
              }
            />
          </ListItemButton>
        ))}
      </List>
    </>
  );

  return (
    <Box component={"nav"} position="relative">
      {/*  width >= 900px */}
      <Drawer
        disableScrollLock={true}
        open
        variant="permanent"
        sx={{
          width: { md: "280px" },
          "& .MuiDrawer-paper": {
            backgroundColor: "background.default",
            borderRight: "1px dashed #919eab3d",
            boxSixing: "border-box",
            width: "280px",
            display: { xs: "none", lg: "block" },
          },
        }}
      >
        {drawer}
      </Drawer>
      {/* width >= 900px */}

      {/* width <900px */}
      <Drawer
        disableScrollLock={true}
        variant="temporary"
        open={open}
        onClose={toggleSidebar}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            backgroundColor: "background.default",
            borderRight: "1px solid #888",
            boxSixing: "border-box",
            width: "280px",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
