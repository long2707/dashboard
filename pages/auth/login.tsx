import React from "react";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { HorizontalInput } from "@/components/common/CustomInput";

import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";
import dynamic from "next/dynamic";

import { useSelector } from "react-redux";
import { RootState } from "@/apps/store";
import { ERROR, GREY_COLOR, INFO } from "@/constants/colors";
import InfoIcon from "@mui/icons-material/Info";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@/components/common/Button";

import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Meta from "@/components/Meta/Meta";
import { LoadingScreen } from "@/components/common/Loading";

const HookForm = dynamic(() => import("@/components/hook-form/HookForm"), {
  ssr: false,
  loading: () => <LoadingScreen />,
});

const schema = yup.object({
  email: yup
    .string()
    .required("Email Address is required")
    .email("Please enter valid Email Address"),
  password: yup.string().required("Password is required"),
});
const SignIn: NextPage = (): JSX.Element => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const themeMode = useSelector(
    (state: RootState) => state.themeMode.themeMode
  );
  const route = useRouter();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSinginHandler = async (data: any) => {
    console.log(data);
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      console.log(res);
      if (res?.ok) {
        route.push("/dashboard");
      } else {
        setError(true);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Meta title="login" description="login" />
      <HookForm title="Hi, Welcome back">
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
          Sign in to Admin
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
            New user?
          </Typography>
          <Link href={"register"} style={{ textDecoration: "none" }}>
            <Box
              component={"span"}
              sx={{
                color: "primary.main",
                fontWeight: "600",
                fontSize: "0.875rem",
                marginLeft: "4px",
              }}
            >
              Create an account
            </Box>
          </Link>
        </Box>
        <Paper
          elevation={0}
          sx={{
            fontSize: "0.875rem",
            backgroundColor: INFO.lighter,
            color: INFO.darker,
            padding: "6px 16px",
            mb: "24px",
            display: "flex",
          }}
        >
          <Box
            sx={{
              marginRight: "12px",
              py: "7px",
              color: "info.main",
            }}
          >
            <InfoIcon />
          </Box>

          <Box
            sx={{
              padding: "8px 0",
            }}
          >
            Use email : <strong>admin123@gmail.com </strong> / password :
            <strong>admin1234 </strong>
          </Box>
        </Paper>
        {error && (
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
              Please re-enter the correct email/password
            </Box>
          </Paper>
        )}
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
          loading={loading}
          onClick={handleSubmit(onSinginHandler)}
          cssButton={{
            backgroundColor:
              themeMode === "light" ? GREY_COLOR[800] : GREY_COLOR[0],
            color: themeMode === "light" ? GREY_COLOR[0] : GREY_COLOR[800],
            "&:hover": {
              backgroundColor:
                themeMode === "light" ? GREY_COLOR[800] : GREY_COLOR[0],
              color: themeMode === "light" ? GREY_COLOR[0] : GREY_COLOR[800],
            },
          }}
        >
          Login
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

export default SignIn;
