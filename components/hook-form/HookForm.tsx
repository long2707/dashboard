import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { LazyLoadComponent } from "react-lazy-load-image-component";
type Props = {
  title: string;
  children: ReactNode;
};

const HookForm: React.FC<Props> = (props) => {
  const { title, children } = props;
  return (
    <>
      <Box
        sx={{
          flexGrow: "1",
          display: {
            xs: "none",
            md: "flex",
          },
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "background.secondary",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: {
              md: "2rem",
            },
            margin: "0px 0px 80px",
            fontWeight: "700",
            lineHeight: "1.5",
            maxWidth: "480px",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        <Typography component={"span"}>
          <Box
            component={"span"}
            sx={{
              lineHeight: 1,
              display: "block",
              overflow: "hidden",
              maxWidth: "720px",
            }}
          >
            <LazyLoadComponent>
              <Box
                component={"img"}
                src="/bg_dashboard.png"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </LazyLoadComponent>
          </Box>
        </Typography>
      </Box>
      <Box
        sx={{
          flexShrink: {
            md: "0",
          },
          padding: {
            xs: "120px 60px",
            md: "240px 60px 0",
          },
          width: "480px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default HookForm;
