import {
  FormControl,
  InputLabel,
  FormHelperText,
  OutlinedInput,
} from "@mui/material";
import React, { ReactNode } from "react";
import { Controller } from "react-hook-form";

type Props = {
  control?: any;
  name: string;
  label: string;
  type: string;
  fieldIcon?: ReactNode;
};

const HorizontalInput: React.FC<Props> = (props) => {
  const { control, name, label, type, fieldIcon } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error },
      }) => {
        return (
          <FormControl
            error={!!error}
            sx={{
              fontWeight: "400",
              "& .MuiInputLabel-root.Mui-focused": {
                color: "primary.contracstText",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderWidth: "1px",
                  borderColor: "border.default",
                },
              },
              "& .MuiFormHelperText-root.Mui-error": {
                marginTop: "8px",
              },
              marginBottom: "24px",
              width: "100%",
            }}
            variant="outlined"
          >
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <OutlinedInput
              id={name}
              type={type}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              label={label}
              name={name}
              endAdornment={fieldIcon}
            />
            {error && (
              <FormHelperText id={name}>{error?.message}</FormHelperText>
            )}
          </FormControl>
          // <TextField
          //   type={type}
          //   name={name}
          //   error={!!error}
          //   label={label}
          //   onBlur={onBlur}
          //   onChange={onChange}
          //   value={value}
          //   helperText={error && error?.message}
          //   sx={{
          //     fontWeight: "400",
          //     "& .MuiInputLabel-root.Mui-focused": {
          //       color: "primary.contracstText",
          //     },
          //     "& .MuiOutlinedInput-root": {
          //       "&.Mui-focused fieldset": {
          //         borderWidth: "1px",
          //         borderColor: "border.default",
          //       },
          //     },
          //     "& .MuiFormHelperText-root.Mui-error": {
          //       marginTop: "8px",
          //     },
          //     marginBottom: "24px",
          //   }}
          //   end
          // />
        );
      }}
    />
  );
};

export default HorizontalInput;
