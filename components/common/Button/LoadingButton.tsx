import { Button } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  loading?: boolean;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  children: ReactNode;
  onClick?: () => void;
  cssButton?: any;
};

const LoadingButton = (props: Props) => {
  return (
    <Button
      variant="contained"
      sx={{
        marginBottom: "30px",
        padding: "10px",
        fontWeight: "700",
        ...props.cssButton,
      }}
      onClick={props.onClick}
      disabled={props.loading}
    >
      {props.children}
    </Button>
  );
};

export default LoadingButton;
