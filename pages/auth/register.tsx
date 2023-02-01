import React from "react";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { HorizontalInput } from "@/components/common/CustomInput";
import HookForm from "@/components/hook-form/HookForm";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Typography,
  Divider,
} from "@mui/material";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/apps/store";
import { ERROR, GREY_COLOR } from "@/constants/colors";
import InfoIcon from "@mui/icons-material/Info";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@/components/common/Button";

import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const schema = yup.object({
  email: yup
    .string()
    .required("Email Address is required")
    .email("Please enter valid Email Address"),
  password: yup.string().required("Password is required"),
});
const Register: NextPage = (props): JSX.Element => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const themeMode = useSelector(
    (state: RootState) => state.themeMode.themeMode
  );
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <>
      <HookForm title="Manage the job more effectively with You">
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              xs: "1.25rem",
              md: "1.2rem",
              lg: "1.5rem",
            },
            margin: "0",
            lineHeight: "1.5",
            fontWeight: "700",
          }}
        >
          Get started absolutely free.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            margin: "16px 0 40px 0",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.875rem",
              lineHeight: "1.571",
            }}
          >
            Already have an account?
          </Typography>
          <Link href={"login"} style={{ textDecoration: "none" }}>
            <Box
              component={"span"}
              sx={{
                color: "primary.main",
                fontWeight: "600",
                fontSize: "0.875rem",
                marginLeft: "4px",
              }}
            >
              Sing in
            </Box>
          </Link>
        </Box>
        <Paper
          elevation={0}
          sx={{
            fontSize: "0.875rem",
            backgroundColor: ERROR.lighter,
            color: ERROR.darker,
            padding: "6px 16px",
            mb: "24px",
            display: "flex",
          }}
        >
          <Box
            sx={{
              marginRight: "12px",
              py: "7px",
              color: "error.main",
            }}
          >
            <InfoIcon />
          </Box>

          <Box
            sx={{
              padding: "8px 0",
            }}
          >
            Sorry. This feature is not developed yet
          </Box>
        </Paper>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <HorizontalInput
              control={control}
              name="firtname"
              type="email"
              label={"First Name"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HorizontalInput
              control={control}
              name="email"
              type="email"
              label={" Last Name"}
            />
          </Grid>
        </Grid>
        <HorizontalInput
          control={control}
          name="email"
          type="email"
          label={"Email address"}
        />
        <HorizontalInput
          control={control}
          name="password"
          type={showPassword ? "type" : "password"}
          label={"Password"}
          fieldIcon={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <LoadingButton
          loading={true}
          cssButton={{
            backgroundColor:
              themeMode === "light" ? GREY_COLOR[800] : GREY_COLOR[0],
            color: themeMode === "light" ? GREY_COLOR[0] : GREY_COLOR[800],
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor:
                themeMode === "light" ? GREY_COLOR[800] : GREY_COLOR[0],
              color: themeMode === "light" ? GREY_COLOR[0] : GREY_COLOR[800],
            },
          }}
        >
          Create Account
        </LoadingButton>
        <Divider
          role="separator"
          sx={{
            fontWeight: "700",
            fontSize: "0.75rem",
            color: GREY_COLOR[600],
            border: "0px",
            "&::before, &::after": {
              position: "relative",
              content: '""',
              top: "50%",
              transform: "translateY(0)",
            },
          }}
        >
          OR
        </Divider>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            my: "30px",
          }}
        >
          <GoogleIcon sx={{ color: ERROR.dark }} />
          <GitHubIcon
            sx={{
              mx: "30px",
              color: "primary.contracstText",
            }}
          />
          <TwitterIcon
            sx={{
              color: "secondary.main",
            }}
          />
        </Box>
      </HookForm>
    </>
  );
};

export default Register;
